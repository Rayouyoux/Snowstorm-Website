import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import "./css/Product.css";

function Product(props) {
    const { language, setLanguage, product } = props
    const [ favourites, setFavourites ] = useState([]);

    const outOfStock = (product.stock <= 0);
    console.log(outOfStock);

    const toggleFavourite = id => {
        var mod = favourites.slice()
        if (mod.indexOf(id) > -1)
            mod.pop(mod.indexOf(id))
        else
            mod.push(id)

        setFavourites(mod)
    }

    return <div className="product-page">
        <Row>
            <div className="titles">
                <Col xs={{ span:10 , offset:2 }}>
                    <h1>{product.name}</h1>
                </Col>
                <Button className="button-card-product" onClick={() => toggleFavourite(product._id)} >
                    <img id="image" src={favourites.indexOf(product._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="favorite-icon" />
                </Button>
            </div>
            <div className="carousel">
                <Col xs={{ span:8 , offset:2 }}>
                    <Carousel className="product-carousel">
                        {
                            product.images.map(() => {
                                return <Carousel.Item>
                                    <img className="d-block w-100" src={product.images[0]} alt="First slide"/>
                                </Carousel.Item>
                            })
                        }
                    </Carousel>
                </Col>
            </div>
            <h2>Description</h2>
            <p>{product.description}</p>
            <p>Prix : {product.price}€</p>
            {
                outOfStock ? (
                    <Button disabled><p>Out Of Stock !</p></Button>
                ) : (
                    <Button>Add To Cart</Button>
                )
            }
            <div className="socials">
                <h2>Share this product on social Media !</h2>
                <a href="https://www.facebook.com/wasdkeyboards" target="_blank" ><img className="logo" src="/img/logo-facebook.png" alt="logo facebook"/></a>
                <a href="https://twitter.com/wasdkeyboards" target="_blank"><img className="logo" src="/img/logo-twitter.png" alt="logo twitter"/></a>
                <a href="https://www.instagram.com/wasdkeyboards" target="_blank"><img className="logo" src="/img/logo-instagram.png" alt="logo instagram"/></a>
            </div>
            <div className="reviews">
                <h2>Bought the product? Add a review !</h2>
                <Form>
                    <Row>
                        <Form.Label>Grade</Form.Label>
                        <Col xs={{ span:1 , offset:1 }}>1</Col>
                        <Col xs={1}>2</Col>
                        <Col xs={1}>3</Col>
                        <Col xs={1}>4</Col>
                        <Col xs={1}>5</Col>
                        <Col xs={1}>6</Col>
                        <Col xs={1}>7</Col>
                        <Col xs={1}>8</Col>
                        <Col xs={1}>9</Col>
                        <Col xs={1}>10</Col>
                        <Col xs={{ span:10 , offset:1 }}>
                            <Form.Range />
                        </Col>
                    </Row>
                <Form.Label>Commentary</Form.Label>
                <Form.Control type="text" placeholder="Leave your commentary here..." />
                </Form>
            </div>
            <div className="technical-sheet">
                <h2>Technical Sheet</h2>
                <Row>
                    <Col xs={{ span:2 , offset:1}}>
                        <p>a</p>
                    </Col>
                    <Col xs={7}>
                        <p>z</p>
                    </Col>
                </Row>
            </div>
        </Row>
    </div>
}

export default Product;