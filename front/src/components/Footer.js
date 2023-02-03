import {
    Link
  } from "react-router-dom";
import "./css/Footer.css"
import { Row, Col, Container } from "react-bootstrap";

function Footer(props) {
    return<footer>
      {
        /* Footer présent sur toutes les pages */
      }
      <img className="img" src="./img/Logo_LightBlue.png" alt="Logo Snowstorm Blue"/>
      <Container className="container-footer"> 
        <Row>
          <Col>
            <h4 className="title">Catégories</h4>
            <Link className="nav-link" to="/listing">Nos produits</Link>
            <Link className="nav-link" to="/customize">Personnaliser</Link>
            <Link className="nav-link" to="/gallery">Galerie</Link>
          </Col>
          <Col>
            <h4 className="title">Informations</h4>
            <Link className="nav-link" to="/support">Support/SAV</Link>
            <Link className="nav-link" to="/faq">FAQ</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/mention">Mentions légales</Link>
          </Col>
          <Col>
            <h4 className="title">Mon compte</h4>
            <Link className="nav-link" to="/">Mes commandes</Link>
            <Link className="nav-link" to="/custom">Mes customs</Link>
            <Link className="nav-link" to="/">Mes informations</Link>
          </Col>
          <Col>
            <h4 className="title">Nos Réseaux</h4>
            <div className="socials">
              <a href="https://www.facebook.com/wasdkeyboards" target="_blank" ><img className="logo" src="/img/logo-facebook.png" alt="logo facebook"/></a>
              <a href="https://twitter.com/wasdkeyboards" target="_blank"><img className="logo" src="/img/logo-twitter.png" alt="logo twitter"/></a>
              <a href="https://www.instagram.com/wasdkeyboards" target="_blank"><img className="logo" src="/img/logo-instagram.png" alt="logo instagram"/></a>
            </div>
          </Col>
        </Row>
        <p className="copyright">©️ Snowstorm - 2023</p>
        </Container>
        </footer>
}


export default Footer;