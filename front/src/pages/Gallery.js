import { Row, Col } from "react-bootstrap";
import { Link } from  "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useEffect,useState} from "react";
import { getUserKeyboards } from '../api/db';
import "./css/Gallery.css";
import blurBg1 from "./bg-img/blurBg1.png";
import blurBg2 from "./bg-img/blurBg2.png";

function Gallery(props) {
    
    
    
    
    const { language, setLanguage } = props
    const [ byLikes, setByLikes ] = useState([]);
    const [ userKeyboards, setUserKeyboards ] = useState([]);
    const [ favourites, setFavourites ] = useState([]);
    const toggleFavourite = id => {
        var mod = favourites.slice()
        if (mod.indexOf(id) > -1)
            mod.pop(mod.indexOf(id))
        else
            mod.push(id)
        setFavourites(mod)
    };

    useEffect(() => {
        const userKeyboardsFetched = getUserKeyboards();
        const userKeyboardsByMostLikedFetched = getUserKeyboards("mostliked");
        userKeyboardsByMostLikedFetched
            .then(result => setByLikes(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
        userKeyboardsFetched
            .then(result => setUserKeyboards(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="gallery-page">
        {
            /*Page de présentation de claviers customs faient par la communauté */
        }
        <img src="/img/wave2.png" alt="Wave" draggable="false"/>
        <div className="titles">
            <Row>
                <Col xs={{ span:6, offset:2}}>
                    <h1 style={{backgroundImage: `url(${blurBg1})`}}>{["The Gallery","La Galerie"][language]}</h1>
                    <h2 style={{backgroundImage: `url(${blurBg1})`}}>{["By users, for users.","Par des utilisateurs, pour des utilisateurs."][language]}</h2>
                </Col>
            </Row>
        </div>
        <img src="/img/wave1.png" alt="Wave" draggable="false"/>

        <div id="most-liked">
            <h3>{["Discover the customized Keyboards of the other users","Découvrez les claviers customize des autres utilisateurs"][language]}</h3>
            <Row>
                {
                    byLikes.map((byLikes,key) =>{
                        return <Col md={4}>
                        <div key={key}>
                            <Card style={{ width: '18rem' }} className="card-margin">
                                <Link to="/product">
                                    <div class="size-img-card-div">
                                        <Card.Img className="size-img-card" variant="top" src={byLikes.images} alt="test"/>
                                    </div>
                                    <Card.Body className="card-style">
                                        <Card.Title>{byLikes.name}</Card.Title>
                                        <Card.Text>{["Like Number : ","Nombre de Like : "][language]}{byLikes.ranking}</Card.Text>
                                        <Button className="button-card-product" onClick={() => toggleFavourite(byLikes._id)} ><img id="image" src={favourites.indexOf(byLikes._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="" /></Button>
                                        <Button className="button-card-product"><img src="./img/cart_icon.png" alt=""/></Button>
                                        {
                                            /*Possibilité de partage sur les réseaux sociaux */
                                        }
                                        <div className="socials">
                                            <a href="https://www.facebook.com/wasdkeyboards" target="_blank" ><img className="logo" src="/img/logo-facebook.png" alt="logo facebook"/></a>
                                            <a href="https://twitter.com/wasdkeyboards" target="_blank"><img className="logo" src="/img/logo-twitter.png" alt="logo twitter"/></a>
                                            <a href="https://www.instagram.com/wasdkeyboards" target="_blank"><img className="logo" src="/img/logo-instagram.png" alt="logo instagram"/></a>
                                        </div>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                    </Col>
                    })
                };
            </Row>
        </div>
    </div>
}

export default Gallery;