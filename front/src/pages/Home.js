import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { backAccess } from "../api/backend";
import React, { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./css/Home.css";
import{ getKeyboards } from'../api/db';
import diagBlob1 from "./bg-img/diagBlob1.png";
import triBg1 from "./bg-img/triBg1.png";


function Home(props) {
    const homeText = {
        "francais" : {
            "h2" : "Les Meilleurs Claviers Du Marché",
            "h3" : "Découvrez nos Produits",
            "b1" : "Magasin",
            "b2" : "Personnaliser",
            "b3" : "Galerie"
        },
        "english" : {
            "h2" : "The Best Keyboards On the Market",
            "h3" : "Discover Our Products",
            "b1" : "Shop",
            "b2" : "Customize",
            "b3" : "Gallery"
        }
    };
    const { language, setLanguage } = props;
    const [ keyboards, setKeyboards ] = useState([]);
    const [ backendTest, setBackendTest ] = useState('LOADING...');
    
    useEffect(() => {
        backAccess.get('/')
        .then(res => setBackendTest(res.data))
        .catch(e => setBackendTest(e.message))
    }, [])

    useEffect(() => {
        const keyboardsFetched = getKeyboards();
        keyboardsFetched
            .then(result => setKeyboards(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="home-page">
        <Row>
            <img src="/img/layeredWaves1.png" draggable="false"/>
            <div className="titles">
                <Col xs={{ span:10 , offset:2 }}>
                    <h1 style={{backgroundImage: `url(${triBg1})`}}>Snowstorm</h1>
                    <h2 style={{backgroundImage: `url(${triBg1})`}}>{language == 0 ? homeText.english.h2 : homeText.francais.h2}</h2>
                </Col>
            </div>
            <img src="/img/layeredWaves2.png" draggable="false"/>
            <div className="carousel">
                <Col xs={{ span:8 , offset:2 }}>
                    <Carousel className="home-carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/clavier-custom-1.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </div>
        </Row>
        <div className="links">
            <h3>{language == 0 ? homeText.english.h3 : homeText.francais.h3}</h3>
            <Row>
                <Col xs={4}>
                    <Link to="/listing" className="buttonLink" style={{backgroundImage: `url(${diagBlob1})`}}>{language == 0 ? homeText.english.b1 : homeText.francais.b1}</Link>
                </Col>
                <Col xs={4}>
                    <Link to="/customize" className="buttonLink" style={{backgroundImage: `url(${diagBlob1})`}}>{language == 0 ? homeText.english.b2 : homeText.francais.b2}</Link>
                </Col>
                <Col xs={4}>
                    <Link to="/gallery" className="buttonLink" style={{backgroundImage: `url(${diagBlob1})`}}>{language == 0 ? homeText.english.b3 : homeText.francais.b3}</Link>
                </Col>
            </Row>
        </div>
    </div>
}

export default Home;