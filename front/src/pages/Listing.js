import "./css/Listing.css";
import { Row, Col } from "react-bootstrap";
import { Link } from  "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import{ getProducts } from'../api/db';
import React,{useEffect,useState} from "react";
import Search from "../components/search";


function Listing(props) {
    const listingText = {
        "francais" : {
            "h1" : "Nos Produits",
            "h21" : "Claviers",
            "h22" : "Composants",
            "h23" : "Accessoires"
        },
        "english" : {
            "h1" : "Our Products",
            "h21" : "Keyboards",
            "h22" : "Components",
            "h23" : "Accessories"
        }
    };
    const { language, setLanguage } = props
    const [ products, setProducts ] = useState([]);
    const [ favourites, setFavourites ] = useState([]);
    const [ compare, setCompare ] = useState([]);
    const [ search, setSearch]  = useState('');

    function refreshPage() {
      window.location.reload(false);
    }

    useEffect(() => {
        const productsFetched = getProducts();
        productsFetched
            .then(result => setProducts(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    const toggleFavourite = id => {
        var mod = favourites.slice()
        if (mod.indexOf(id) > -1)
            mod.pop(mod.indexOf(id))
        else
            mod.push(id)

        setFavourites(mod)
    }

    /*
    console.log(compare);
    const compareTool = product => {
        console.log(compare);
        console.log((compare == []));
        console.log((compare.type != product.type));
        if ((compare == []) || (compare.type != product.type)) {
            compare.push(product);
        } else {
            compare = setCompare([]);
            compare.push(product);
        }
        console.log(compare);
    }
    */
   /*onClick={() => compareTool(product)}*/

    return <div className="listing-page">
        <div className="top-of-page">
            <Row>
                <Col xs={{ span:5, offset:2 }}>
                    <h1>{language == 0 ? listingText.english.h1 : listingText.francais.h1}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <h2>{language == 0 ? listingText.english.h21 : listingText.francais.h21}</h2>
                    <a href="#keyboards" smooth><img draggable="false" className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></a>
                </Col>
                <Col xs={12} md={4}>
                    <h2>{language == 0 ? listingText.english.h23 : listingText.francais.h23}</h2>
                    <a href="#accessories"><img draggable="false" className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></a>
                </Col>
                <Col xs={12} md={4}>
                    <h2>{language == 0 ? listingText.english.h22 : listingText.francais.h22}</h2>
                    <a href="#components"><img className="section-image" src="https://assets.hardwarezone.com/img/2022/06/board-paul-esch-laurent-8ssNFn4VPLg-unsplash.jpg"/></a>
                </Col>
            </Row>
        </div>

        <div className="products-part">
            <Container>
            <Search setSearch = {setSearch} />
                <div id="keyboards">
                    <h3>{language == 0 ? listingText.english.h21 : listingText.francais.h21}</h3>
                    <Row>
                        {
                        products.filter((product) => {
                            if (product.type == "keyboard")
                                return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);}).map((product,key) => (
                                <Col md={4}>
                                    <div key={key}>
                                        <Card style={{ width: '18rem' }} className="card-margin">
                                            <div className="size-img-card-div">
                                                <Card.Img draggable="false"  className="size-img-card" variant="top" src={product.images} alt="test" />
                                            </div>
                                            <Card.Body>
                                                <Link to={"/product/"+product._id}>
                                                    <Card.Title className="card-link">{product.name}</Card.Title>
                                                </Link>
                                                <Card.Text>
                                                    {product.description}
                                                </Card.Text>
                                                <Button className="button-card-product" onClick={() => toggleFavourite(product._id)} >
                                                    <img draggable="false"  id="image" src={favourites.indexOf(product._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="favorite-icon" />
                                                </Button>
                                                <Button className="button-card-product">
                                                    <img draggable="false"  src="./img/cart_icon.png" alt="cart icon"/>
                                                </Button>
                                                <Button className="button-card-product">
                                                    Compare
                                                </Button>
                                                <Button className="button-card-product">
                                                    <Link to={"/"+product._id}>View More</Link>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                        ))
                        }
                    </Row>
                </div>
                <div id="accessories">
                    <h3>{language == 0 ? listingText.english.h23 : listingText.francais.h23}</h3>
                    <Row>
                    {
                        products.filter((product) => {
                            if (product.type == "accessory")
                                return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);}).map((product,key) => (
                                    <Col md={4}>
                                    <div key={key}>
                                        <Card style={{ width: '18rem' }} className="card-margin">
                                            <div className="size-img-card-div">
                                                <Card.Img className="size-img-card" variant="top" draggable="false"  src={product.images} alt="test" />
                                            </div>
                                            <Card.Body>
                                                <Link to={"/product/"+product._id}>
                                                    <Card.Title className="card-link">{product.name}</Card.Title>
                                                </Link>
                                                <Card.Text className="">
                                                    {product.description}
                                                </Card.Text>
                                                <Button className="button-card-product" onClick={() => toggleFavourite(product._id)} >
                                                    <img id="image" src={favourites.indexOf(product._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="favorite-icon" draggable="false"  />
                                                </Button>
                                                <Button className="button-card-product">
                                                    <img src="./img/cart_icon.png" alt="cart icon" draggable="false" />
                                                </Button>
                                                <Button className="button-card-product">
                                                    Compare
                                                </Button>
                                                <Button className="button-card-product">
                                                    <Link to={"/"+product._id}>View More</Link>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                        ))
                        }
                    </Row>
                </div>
                <div id="components">
                    <h3>{language == 0 ? listingText.english.h22 : listingText.francais.h22}</h3>
                    <Row>
                    {
                        products.filter((product) => {
                            if (product.type == "component")
                                return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);}).map((product,key) => (
                                    <Col md={4}>
                                    <div key={key}>
                                        <Card style={{ width: '18rem' }} className="card-margin">
                                            <div className="size-img-card-div">
                                                <Card.Img className="size-img-card" variant="top" src={product.images} alt="test" draggable="false" />
                                            </div>
                                            <Card.Body>
                                                <Link to={"/product/"+product._id}>
                                                    <Card.Title className="card-link">{product.name}</Card.Title>
                                                </Link>
                                                <Card.Text className="">
                                                    {product.description}
                                                </Card.Text>
                                                <Button className="button-card-product" onClick={() => toggleFavourite(product._id)} >
                                                    <img id="image" src={favourites.indexOf(product._id) > -1 ? './img/filled-heart-icon.png' : "./img/heart-icon.png"} alt="favorite-icon" draggable="false" />
                                                </Button>
                                                <Button className="button-card-product">
                                                    <img src="./img/cart_icon.png" alt="cart icon" draggable="false" />
                                                </Button>
                                                <Button className="button-card-product">
                                                    Compare
                                                </Button>
                                                <Button className="button-card-product">
                                                    <Link to={"/"+product._id}>View More</Link>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                        ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
        <p style={{color : 'white'}}>{compare}</p>
    </div>
}

export default Listing;