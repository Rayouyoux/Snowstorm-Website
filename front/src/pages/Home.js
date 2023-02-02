import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./css/Home.css";
import { getKeyboards} from '../api/db';
import diagBlob1 from "./bg-img/diagBlob1.png";
import triBg1 from "./bg-img/triBg1.png";


function Home(props) {
    const { language, setLanguage } = props;
    const [bySales, setBySales] = useState([]);

    useEffect(() => {
        const keyboardsByMostSalesFetched = getKeyboards("mostsales");
        keyboardsByMostSalesFetched
            .then(result => setBySales(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <div className="home-page">
        <Row>
            <img src="/img/layeredWaves1.png" draggable="false" />
            <div className="titles">
                <Col xs={{ span: 10, offset: 2 }}>
                    <h1 style={{ backgroundImage: `url(${triBg1})` }}>Snowstorm</h1>
                    <h2 style={{ backgroundImage: `url(${triBg1})` }}>{["Les Meilleurs Claviers Du Marché", "The Best Keyboards On the Market"][language]}</h2>
                </Col>
            </div>
            <img src="/img/layeredWaves2.png" draggable="false" />
            <div className="carousel">
                <Col xs={{ span: 8, offset: 2 }}>
                    <Carousel className="home-carousel">
                        {
                            bySales.map((bySales, key) => {
                                return <Carousel.Item>
                                    <img className="d-block w-100" src={bySales.images[0]} alt="First slide" draggable="false" />
                                    <Carousel.Caption>
                                        <h3>{bySales.name}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </Col>
            </div>
        </Row>
        <div className="links">
            <h3>{["Discover Our Products", "Découvrez nos Produits"][language]}</h3>
            <Row>
                <Col xs={4}>
                    <Link to="/listing" className="button-design" style={{ backgroundImage: `url(${diagBlob1})` }} draggable="false" >{["Shop", "Magasin"][language]}</Link>
                </Col>
                <Col xs={4}>
                    <Link to="/customize" className="button-design" style={{ backgroundImage: `url(${diagBlob1})` }} draggable="false" >{["Customize", "Personnaliser"][language]}</Link>
                </Col>
                <Col xs={4}>
                    <Link to="/gallery" className="button-design" style={{ backgroundImage: `url(${diagBlob1})` }} draggable="false" >{["Gallery", "Galerie"][language]}</Link>
                </Col>
            </Row>
        </div>
    </div>
}

export default Home;