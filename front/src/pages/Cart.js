import { getProducts } from '../api/db';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const CartChange = (productId) => {
    if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([{ itemId: productId }]));
    } else {
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        if (currentCart.find(product => product.itemId === productId)) {
            const newCart = JSON.stringify(currentCart.filter(product => product.itemId != productId));
            localStorage.setItem("cart", newCart);
        } else {
            const newCart = JSON.stringify([...currentCart, { itemId: productId }]);
            localStorage.setItem("cart", newCart);
        }
    }
}

const Cart = () => {
    {
        /*Page du panier de l'utilisateur */
    }
    const [products, setProducts] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const myCart = JSON.parse(localStorage.getItem("cart"))

    const toggleFavourite = id => {
        var mod = favourites.slice()
        if (mod.indexOf(id) > -1)
            mod.pop(mod.indexOf(id))
        else
            mod.push(id)

        setFavourites(mod)
    }

    useEffect(() => {
        const productsFetched = getProducts();
        productsFetched
            .then(result => setProducts(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <div className="cart-page">
        <h1>Your Cart</h1>
        <Row>
            {/*
            myCart.map((article, key) => {
                products.filter(product =>  product._id === article.itemId)
                    return  <Col md={4}>
                        <div key={key}>
                            <Card style={{ width: '18rem' }} className="card-margin">
                                <div className="size-img-card-div">
                                    <Card.Img draggable="false" className="size-img-card" variant="top" src={product.images} alt="test" />
                                </div>
                                <Card.Body>
                                    <Link to={"/product/" + product._id}>
                                        <Card.Title className="card-link">{product.name}</Card.Title>
                                    </Link>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Button className="button-card-product" onClick={() => toggleFavourite(product._id)} >
                                        <img draggable="false" id="image" src={favourites.indexOf(product._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="favorite-icon" />
                                    </Button>
                                    <Button className="button-card-product" onClick={() => CartChange(product._id)}>
                                        <img draggable="false" src="./img/cart_icon.png" alt="cart icon" />
                                    </Button>
                                    <Button className="button-card-product">
                                        Compare
                                    </Button>
                                    <Button className="button-card-product">
                                        <Link to={"/" + product._id}>View More</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
            })
         */}
        </Row>

        <button onClick={() => CartChange("testtesttest")}>test icule</button>
        <button onClick={() => CartChange("BOUAHAHAHA")}>test yahahahoayao</button>
    </div>
}

export { CartChange, Cart };