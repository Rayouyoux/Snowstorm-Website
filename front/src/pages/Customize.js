import { Row, Col, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import diagBlob1 from "./bg-img/diagBlob1.png";
import "./css/Customize.css";

function Customize(props) {
    const [ show , setShow ] = useState(0)
    useEffect(() => {
        console.log(show)
    },[show])

    return <div className="customize-page">
        {
            show == 0 ? (
                <div className="first-slide">
                    <h1>Customize your keyboard</h1>
                    <Row>
                        <Col xs={{ span:4 , offset:4}} className="links">
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
                    <Link onClick={() => {
                                setShow(0);
                            }} className="" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                    <h1>slide 2</h1>
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
                                setShow(2);
                            }} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Customize it !</Link>
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