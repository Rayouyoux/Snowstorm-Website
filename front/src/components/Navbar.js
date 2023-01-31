import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Row, Col, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import LoginOverlay from './LoginOverlay';
import "./Navbar.css";
import { useEffect } from "react";



function NavBar({ language, setLanguage, user, setUser } ) {
    const navText = {
        "francais" : {
            "l1" : "Nos Produits",
            "l2" : "Personnaliser",
            "l3" : "Galerie",
            "l4" : "Support / SAV",
            "l5" : "FAQ",
            "l6" : "Contact"
        },
        "english" : {
            "l1" : "Shop",
            "l2" : "Customize",
            "l3" : "Gallery",
            "l4" : "Support/A.S.S.",
            "l5" : "FAQ",
            "l6" : "Contact"
        }
    };

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
        console.log(language)
    }, [language])

    return (
        <div className="navbar-component">
            <div className="nav-top-bar">
                <Row>
                    <Col xs={1} className="icons">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src="/img/globe_icon.png" className="globe-icon" alt="Globe Icon"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() =>{
                                    setLanguage(0)
                                    }}>EN</Dropdown.Item>
                                <Dropdown.Item onClick={() =>{
                                    setLanguage(1)
                                    }}>FR</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={{ span: 4, offset: 3 }}>
                        <Link className="title" to="/">Snowstorm</Link>
                    </Col>
                    <Col xs={{ span: 2, offset: 2}} className="icons">
                        <Link><img src="/img/cart_icon.png" className="cart-icon" alt="Cart Icon"/></Link>
                        {user ? <Link to="/user"><img src="/img/user_icon.png" className="user-icon" alt="User Icon" /></Link> :<LoginOverlay className="user-icon" user={user} setUser={setUser} />}
                    </Col>
                </Row>
            </div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/listing">{language == 0 ? navText.english.l1 : navText.francais.l1}</Link>
                            <Link className="nav-link" to="/customize">{language == 0 ? navText.english.l2 : navText.francais.l2}</Link>
                            <Link className="nav-link" to="/gallery">{language == 0 ? navText.english.l3 : navText.francais.l3}</Link>
                            <Link className="nav-link" to="/support">{language == 0 ? navText.english.l4 : navText.francais.l4}</Link>
                            <Link className="nav-link" to="/faq">{language == 0 ? navText.english.l5 : navText.francais.l5}</Link>
                            <Link className="nav-link" to="/contact">{language == 0 ? navText.english.l6 : navText.francais.l6}</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};


export default NavBar;