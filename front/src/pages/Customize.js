import { Row, Col, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import diagBlob1 from "./bg-img/diagBlob1.png";
import {setInfo} from "../api/backend.js";
import "./css/Customize.css";

function Customize(props) {
    const [ show , setShow ] = useState(0)
    useEffect(() => {
        console.log(show)
    },[show])

    const components = {
        "keyboards" : {
            "TKL + NUM PAD" : true,
            "CLASSIC + NUM PAD" : true,
            "TKL" : false,
            "CLASSIC" : false
        },
        "commandKeys" : {
            "Windows" : "./img/windows-logo.png",
            "Linux" : "./img/linux-icon.png",
            "MacOS" : "./img/macos-cmd-logo.png"
        }
    }

    setInfo.customizeOptions = {
        "colors" : {
            "Black" : "#000000",
            "Maroon" : "#800000",
            "Brown" : "#825A2C",
            "Taupe" : "#87794E",
            "Crimson" : "#A20025",
            "Red" : "#FF0000",
            "Orange" : "#FFA500",
            "Amber" : "#F0A30A",
            "Yellow" : "#FFFF00",
            "Olive" : "#808000",
            "Purple" : "#808000",
            "Fuchsia" : "#FF00FF",
            "White" : "#FFFFFF",
            "Lime" : "#00FF00",
            "Green" : "#008000",
            "Navy" : "#000080",
            "Blue" : "#0000FF",
            "Aqua" : "#00FFFF",
            "Teal" : "#008080",
            "Silver" : "#C0C0C0",
            "Gray" : "#808080"
        },
        "fonts" : {
            "modern" : "font-family: 'Charis SIL', serif;",
            "classic" : "font-family: 'Open Sans', sans-serif;",
            "traditional" : "font-family: 'Oswald', sans-serif;",
            "original" : "font-family: 'Itim', cursive;"
        }
    }


    return <div className="customize-page">
        {
            show == 0 ? (
                <div className="first-slide">
                    <h1>Customize your keyboard</h1>
                    <Row>
                        <Col xs={{ span:4 , offset:4 }} className="links">
                            <Link onClick={() => {
                                setShow(1);
                            }} className="button-design" style={{backgroundImage: `url(${diagBlob1})`, userSelect : 'none'}}>Start Here !</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
        {
            show == 1 ? (
                <div className="second-slide">
                    
                    <h1>slide 2</h1>
                    <Row>
                        <Col md={4}>
                            <div>
                                {
                                    components.keyboards.map((components, key) => {
                                        return <Card style={{ width: '18rem' }} className="card-margin">
                                            <div className="size-img-card-div">
                                                <Card.Img className="size-img-card" variant="top" src="https://hfr-meca.github.io/guide/images/layout-full-size.png" alt="test" />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="card-link">tkl</Card.Title>
                                                <Card.Text>
                                                    <p>clavier avec numpad</p>
                                                    <p>{}</p>
                                                </Card.Text>
                                                <Button className="button-card-product">
                                                    Buy
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    })
                                    
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row className="links">
                        <Col xs={3}>
                            <Link onClick={() => {
                                setShow(0);
                            }} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                        </Col>
                        <Col xs={{ span:3 , offset:6 }}>
                            <Link onClick={() => {
                                setShow(2);
                            }} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Next</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
        {
            show == 2 ? (
                <div className="third-slide">
                    <Link onClick={() => {
                                setShow(1);
                            }} className="" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                    <h1>slide 3</h1>
                    <Row>
                        <Col xs={{ span:4 , offset:4}} className="links">
                        <Row>
                            <Col md={4}>
                                <div>
                                    <Card style={{ width: '18rem' }} className="card-margin">
                                        <div className="size-img-card-div">
                                            <Card.Img className="size-img-card" variant="top" src="https://hfr-meca.github.io/guide/images/layout-full-size.png" alt="test" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="card-link">tkl</Card.Title>
                                            <Card.Text>
                                                clavier avec numpad
                                            </Card.Text>
                                            <Button className="button-card-product">
                                                Buy
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                            <Link onClick={() => {
                                setShow(3);
                            }} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Customize it !</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
        {
            show == 3 ? (
                <div className="fourth-slide">
                    <Link onClick={() => {
                                setShow(2);
                            }} className="" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                    <h1>slide 4</h1>
                    <Row>
                        <Col xs={{ span:4 , offset:4}} className="links">
                        <Row>
                            <Col md={4}>
                                <div>
                                    <Card style={{ width: '18rem' }} className="card-margin">
                                        <div className="size-img-card-div">
                                            <Card.Img className="size-img-card" variant="top" src="https://hfr-meca.github.io/guide/images/layout-full-size.png" alt="test" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="card-link">tkl</Card.Title>
                                            <Card.Text>
                                                clavier avec numpad
                                            </Card.Text>
                                            <Button className="button-card-product">
                                                Buy
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                            <Link onClick={() => {
                                setShow(false);
                            }} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Customize it !</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
    </div>          
}


export default Customize;