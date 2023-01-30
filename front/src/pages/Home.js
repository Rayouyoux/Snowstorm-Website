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
    const { language, setLanguage } = props
    const [ keyboards, setKeyboards ] = useState([]);
    const [ backendTest, setBackendTest ] = useState('LOADING...')

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
            <img src="/img/layeredWaves1.png"/>
            <div className="titles">
                <Col xs={{ span:10 , offset:2 }}>
                    <h1 style={{backgroundImage: `url(${triBg1})`}}>Snowstorm{language}</h1>
                    <h2 style={{backgroundImage: `url(${triBg1})`}}>Les Meilleurs claviers du marché</h2>
                </Col>
            </div>
            <img src="/img/layeredWaves2.png"/>
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
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/clavier-custom-2.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/clavier-custom-3.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/img/clavier-custom-4.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </div>
        </Row>
        <div className="links">
            <h3>Découvrez nos produits</h3>
            <Row>
                <Col xs={4}>
                    <Link className="buttonLink" style={{backgroundImage: `url(${diagBlob1})`}}>Magasin</Link>
                </Col>
                <Col xs={4}>
                    <Link className="buttonLink" style={{backgroundImage: `url(${diagBlob1})`}}>Personnaliser</Link>
                </Col>
                <Col xs={4}>
                    <Link className="buttonLink" style={{backgroundImage: `url(${diagBlob1})`}}>Galerie</Link>
                </Col>
            </Row>
        </div>
    </div>
}

export default Home;