import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Row, Col, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import LoginOverlay from './LoginOverlay';
import "./Navbar.css";
import { useEffect } from "react";



function NavBar(props) {
    const { language, setLanguage } = props

    useEffect(() => {
        console.log(language)
    }, [language])

    return (
        <div className="navbar-component">
            <div class="nav-top-bar">
                <Row>
                    <Col xs={1} className="icons">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src="/img/globe_icon.png" class="globe-icon" alt="Globe Icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setLanguage(0)}>FR</Dropdown.Item>
                                <Dropdown.Item onClick={() => setLanguage(1)}>EN</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={{ span: 4, offset: 3 }}>
                        <Link className="title" to="/">Snowstorm</Link>
                    </Col>
                    <Col xs={{ span: 2, offset: 2}} className="icons">
                        <Link><img src="/img/cart_icon.png" class="cart-icon" alt="Cart Icon"/></Link>
                        {/*<Link><img src="/img/user_icon.png" class="user-icon" alt="User Icon"/></Link>*/}
                        <LoginOverlay className="user-icon"/>
                    </Col> 
                </Row>
            </div>  
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/listing">Nos produits</Link>
                            <Link className="nav-link" to="/custom">Personnaliser</Link>
                            <Link className="nav-link" to="/gallery">Galerie</Link>
                            <Link className="nav-link" to="/support">Support/SAV</Link>
                            <Link className="nav-link" to="/faq">FAQ</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};


export default NavBar;