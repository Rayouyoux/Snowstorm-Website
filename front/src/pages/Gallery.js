import { Row, Col } from "react-bootstrap";
import { Link } from  "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useEffect,useState} from "react";
import{ getUserKeyboards } from'../api/db';
import "./css/Gallery.css";
import blurBg1 from "./bg-img/blurBg1.png";
import blurBg2 from "./bg-img/blurBg2.png";

function Gallery(props) {
    const galleryText = {
        "francais" : {
            "h1" : "La Galerie",
            "h2" : "Par des utilisateurs, pour des utilisateurs.",
            "h31" : "Les Plus Aimés"
        },
        "english" : {
            "h1" : "The Gallery",
            "h2" : "By users, for users.",
            "h31" : "Most Liked"
        }
    };
    const { language, setLanguage } = props
    const [ userKeyboards, setUserKeyboards ] = useState([]);
    const [ favourites, setFavourites ] = useState([]);
    const toggleFavourite = id => {
        var mod = favourites.slice()
        if (mod.indexOf(id) > -1)
            mod.pop(mod.indexOf(id))
        else
            mod.push(id)
        setFavourites(mod)
    }

    useEffect(() => {
        const userKeyboardsFetched = getUserKeyboards();
        userKeyboardsFetched
            .then(result => setUserKeyboards(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="gallery-page">
        <img src="/img/wave2.png" alt="Wave" draggable="false"/>
        <div className="titles">
            <Row>
                <Col xs={{ span:6, offset:2}}>
                    <h1 style={{backgroundImage: `url(${blurBg1})`}}>{language == 0 ? galleryText.english.h1 : galleryText.francais.h1}</h1>
                    <h2 style={{backgroundImage: `url(${blurBg1})`}}>{language == 0 ? galleryText.english.h2 : galleryText.francais.h2}</h2>
                </Col>
            </Row>
        </div>
        <img src="/img/wave1.png" alt="Wave" draggable="false"/>

        <div id="most-liked">
                    <h3>{language == 0 ? galleryText.english.h3 : galleryText.francais.h3}</h3>
                    <Row>
                    {
                        userKeyboards.map((userKeyboards,key) =>{

                        return <Col md={4}>
                            <div key={key}>
                                <Card style={{ width: '18rem' }} className="card-margin">
                                    <Link to="/product">
                                    <div class="size-img-card-div">
                                        <Card.Img className="size-img-card" variant="top" src={userKeyboards.images} alt="test"/>
                                    </div>
                                        <Card.Body className="card-style">
                                        <Card.Title>{userKeyboards.name}</Card.Title>
                                        <Card.Text>{userKeyboards.description}</Card.Text>
                                            <Button className="button-card-product" onClick={() => toggleFavourite(userKeyboards._id)} ><img id="image" src={favourites.indexOf(userKeyboards._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="" /></Button>
                                            <Button className="button-card-product"><img src="./img/cart_icon.png" alt=""/></Button>
                                        </Card.Body>
                                    </Link>
                                </Card>
                        </div>
                        </Col>
                        })
                    }
                    </Row>
                </div>
    </div>
}

export default Gallery;