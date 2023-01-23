import {
    Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./Navbar.css"

function NavBar() {
    return (
        <><Container>
            <h1>Title</h1>
        </Container>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link class="nav-link" to="/">Nos produits</Link>
                        <Link class="nav-link" to="/Test">Personnaliser</Link>
                        <Link class="nav-link" to="/">Galerie</Link>
                        <Link class="nav-link" to="/">Support/SAV</Link>
                        <Link class="nav-link" to="/">FAQ</Link>
                        <Link class="nav-link" to="/">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></>
    )
}


export default NavBar;