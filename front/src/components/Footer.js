import {
    Link
  } from "react-router-dom";
import "./Footer.css"
import { Row, Col, Container } from "react-bootstrap";

function Footer(props) {
    return<footer><Container className="container-footer"> 
        <Row>
          <Col>
            <h4>Catégories</h4>
            <Link className="nav-link" to="/">Nos produits</Link>
            <Link className="nav-link" to="/Test">Personnaliser</Link>
            <Link className="nav-link" to="/">Galerie</Link>
          </Col>
          <Col>
            <h4>Informations</h4>
            <Link className="nav-link" to="/">Support/SAV</Link>
            <Link className="nav-link" to="/faq">FAQ</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Col>
          <Col>
            <h4>Mon compte</h4>
            <Link className="nav-link" to="/">Mes commandes</Link>
            <Link className="nav-link" to="/faq">Mes customs</Link>
            <Link className="nav-link" to="/contact">Mes informations</Link>
          </Col>
        </Row>
        </Container>
        </footer>
}


export default Footer;