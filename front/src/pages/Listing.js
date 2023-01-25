import "./Listing.css";
import { Row, Col } from "react-bootstrap";
import { Link } from  "react-router-dom";

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
                    <Link><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></Link>
                </Col>
                <Col xs={12} md={4}>
                    <h2>COMPONENTS</h2>
                    <Link><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></Link>
                </Col>
                <Col xs={12} md={4}>
                    <h2>ACCESORIES</h2>
                    <Link><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></Link>
                </Col>
            </Row>
        </div>
        <div id="keyboards">

        </div>
    </div>
}

export default Listing