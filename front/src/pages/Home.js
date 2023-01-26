import { Row, Col } from "react-bootstrap";
import { backAccess } from "../api/db";
import React, { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";


function Home(props) {
    const { language, setLanguage } = props
    const [ backendTest, setBackendTest ] = useState('LOADING...')

    useEffect(() => {
        backAccess.get('/')
        .then(res => setBackendTest(res.data))
        .catch(e => setBackendTest(e.message))
    }, [])

    return <div className="home-page">
        <Row>
            <Col xs={{ span:10 , offset:2 }}>
                <h1>Snowstorm{language}</h1>
                <h2>Les Meilleurs claviers du marché</h2>
            </Col>
            
            <div className="carousel">
                <Col xs={{ span:8 , offset:2 }}>
                    <Carousel className="home-carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/clavier-custom-1.jpg"
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
                            src="./img/clavier-custom-2.jpg"
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
                            src="./img/clavier-custom-3.jpg"
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
                            src="./img/clavier-custom-4.jpg"
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
          
        <p>{backendTest}</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
}

export default Home;