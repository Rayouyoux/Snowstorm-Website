import "./Listing.css";
import { Row, Col } from "react-bootstrap";
import { Link } from  "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Listing(props) {
    return <div className="listing-page">
        <div className="top-of-page">
            <Row>
                <Col xs={{ span:5, offset:2 }}>
                    <h1>OUR PRODUCTS</h1>
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
        
        <div className="bot-of-page">
            <Container>
                <div id="keyboards">
                    <h3>Keyboards</h3>
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

export default Listing