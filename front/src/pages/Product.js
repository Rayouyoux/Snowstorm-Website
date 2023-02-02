import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import "./css/Product.css";
import { useParams } from "react-router-dom";
import { getProductsById } from "../api/db";
import CartChange from './Cart';

function Product({ language, setLanguage }) {
    const [ favourites, setFavourites ] = useState([]);
    const [ product, setProduct ] = useState({
        "_id":"63d14307611b313fb6ffdf38",
        "name":"Loading...",
        "price":0,
        "type":"keyboard",
        "description":"Loading...",
        "images":["https://cdn.shopify.com/s/files/1/0533/4515/7292/files/Clavier_mecanique_custom_1600x.jpg?v=1642699727"],
        "tags":["les tags c'est un array"],
        "quantity":0
    })
    const [ outOfStock, setOutOfStock ] = useState(true)

    var params = useParams();
    var id = params.id
    useEffect(() => {
        getProductsById(id).then(data => {
            console.log(data)
            setProduct(data)
            setOutOfStock(data.stock <= 0)
        })
    }, [])

    /*useLoaderData().then(prd => {
        setProduct(prd)
    })*/
    // export 'useLoaderData' (imported as 'useLoaderData') was not found in 'react-router-dom' (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter)

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
                    <Button onClick={() => CartChange(product._id)}>Add To Cart</Button>
                )
            }
            <div className="socials">
                <h2>Share this product on social Media !</h2>
                <a href="https://www.facebook.com/wasdkeyboards" target="_blank" ><img className="logo" src="/img/logo-facebook.png" alt="logo facebook"/></a>
                <a href="https://ctt.ac/Cfarc" target="_blank"><img className="logo" src="/img/logo-twitter.png" alt="logo twitter"/></a>
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