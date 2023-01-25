import { Row, Col } from "react-bootstrap";
import { backAccess } from "../api/db";
import React, { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";


function Home(props) {
    const [ backendTest, setBackendTest ] = useState('LOADING...')

    useEffect(() => {
        backAccess.get('/')
        .then(res => setBackendTest(res.data))
        .catch(e => setBackendTest(e.message))
    }, [])

    return <div className="home-page">
        <Row>
            <Col xs={{ span:10 , offset:2 }}>
                <h1>Snowstorm</h1>
                <h2>Les Meilleurs claviers du marché</h2>
            </Col>
            <Col xs={{ span:10 , offset:1 }}>
                <Carousel className="home-carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="{/*src here*/}"
                        alt="Keyboard Image"
                        />
                        <Carousel.Caption>
                        <h3>First Slide Label{/* add label here */}</h3>
                        <p>description{/* add description here */}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="{/*src here*/}"
                        alt="Keyboard Image"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label{/* add label here */}</h3>
                        <p>description{/* add description here */}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="{/*src here*/}"
                        alt="Keyboard Image"
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
                        src="{/*src here*/}"
                        alt="Keyboard Image"
                        />
                        <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
        

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  
        <p>{backendTest}</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
}

export default Home;