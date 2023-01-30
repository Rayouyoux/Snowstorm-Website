import "./css/Listing.css";
import { Row, Col } from "react-bootstrap";
import { Link } from  "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import{ getKeyboards } from'../api/db';
import React,{useEffect,useState} from "react";


function Listing(props) {
    const { language, setLanguage } = props
    const [ keyboards, setKeyboards ] = useState([]);
    const [ favourites, setFavourites ] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    function refreshPage() {
      window.location.reload(false);
    }
    useEffect(() => {
        const keyboardsFetched = getKeyboards();
        keyboardsFetched
            .then(result => setKeyboards(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    const toggleFavourite = id => {
        var mod = favourites.slice()
        if (mod.indexOf(id) > -1)
            mod.pop(mod.indexOf(id))
        else
            mod.push(id)
        
        setFavourites(mod)
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
    if (searchInput.length > 0) {
        keyboards.filter((keyboard) => {
        return keyboard.name.match(searchInput);
        })};
    return <div className="listing-page">
        <div className="top-of-page">
            <Row>
                <Col xs={{ span:5, offset:2 }}>
                    <h1>OUR PRODUCTS{language}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <h2>KEYBOARDS</h2>
                    <a href="#keyboards" smooth><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></a>
                </Col>
                <Col xs={12} md={4}>
                    <h2>COMPONENTS</h2>
                    <a href="#components"><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></a>
                </Col>
                <Col xs={12} md={4}>
                    <h2>ACCESSORIES</h2>
                    <a href="#accessories"><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></a>
                </Col>
            </Row>
        </div>
        
        <div className="products-part">
            <Container>
            <input type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />
                <div id="keyboards">
                    <h3>Keyboards</h3>
                    <Row>
                    {
                        keyboards.map((keyboard,key) =>{

                        return <Col md={4}>
                            <div key={key}>
                            
                                <Card style={{ width: '18rem' }} className="card-margin">
                                
                                <div class="size-img-card-div">
                                    <Card.Img className="size-img-card" variant="top" src={keyboard.images} alt="test" />
                                </div>
                                <Card.Body>
                                <Link to="/product">
                                <Card.Title className="card-link">{keyboard.name}</Card.Title>
                                </Link>
                                <Card.Text className="">{keyboard.description}
                                </Card.Text>
                                
                                <Button className="button-card-product" onClick={() => toggleFavourite(keyboard._id)} ><img id="image" src={favourites.indexOf(keyboard._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="" /></Button>
                                <Button className="button-card-product"><img src="./img/cart_icon.png" alt=""/></Button>
                                </Card.Body>
                                </Card>
                            
                        </div>
                        </Col>
                        })
                        
                    }
                    </Row>
                </div> 
                <div id="components">
                    <h3>Components</h3>
                    <Card style={{ width: '18rem' }} className="card-margin">
                        <Card.Img variant="top" src="./img/clavier-custom-1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div> 
                <div id="accessories">
                    <h3>Accessories</h3>
                    <Card style={{ width: '18rem' }} className="card-margin">
                        <Card.Img variant="top" src="./img/clavier-custom-1.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div> 
            </Container>
        </div>
    </div>
}

export default Listing;