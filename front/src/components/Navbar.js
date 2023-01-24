import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./Navbar.css";

function NavBar() {
    return (
        <div className="navbar-component">
            <div class="nav-top-bar">
                <Link className="title" to="/">Snowstorm</Link>
                <Link>a</Link>
                <Link>b</Link>
                <Link>c</Link>
            </div>  
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Nos produits</Link>
                            <Link className="nav-link" to="/Test">Personnaliser</Link>
                            <Link className="nav-link" to="/">Galerie</Link>
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