import { Row, Col, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import diagBlob1 from "./bg-img/diagBlob1.png";
import { getKeyboards } from '../api/db';
import Keyboard from "./keyboard";
import "./css/Customize.css";
import { CartChange } from "./Cart";
import { useForm } from "react-hook-form";

function Customize(props) {
    const [ show , setShow ] = useState(0)
    const [ showB , setShowB] = useState(0)
    const [ showC , setShowC] = useState(0)
    const [ keyboards , setKeyboards] = useState([])
    const [ editKeys , setEditKeys ] = useState(true)
    const [ selectedColor , setSelectedColor ] = useState("Black")
    const [ keyboard , setKeyboard] = useState({})
    const [ keyColors, setKeyColors ] = useState([])
    const [ cmdKey, setCmdKey ] = useState("")
    const [ font, setFont ] = useState("")
    const [ message, setMessage] = useState("")
    const [ finishedProduct, setFinishedProduct ] = useState({
        "keyboard": "",
        "colors": [],
        "cmdkey" : "",
        "font" : "",
        "message" : ""
    })

    useEffect(() => {
        const keyCount = keyboard.keyCount || 101
        var kColors = []
        for (let i = 0; i < keyCount; i++) {
            kColors.push({
                "key": "#030303",
                "text": "#FFFFFF"
            })
        }
        setKeyColors(kColors)
    }, [keyboard])

    useEffect(() => {
        setFinishedProduct({
            "keyboard": keyboard._id,
            "colors": keyColors,
            "cmdkey" : cmdKey,
            "font" : font,
            "message" : message
        })
        console.log(finishedProduct);
    }, [keyboard, keyColors, cmdKey, font, message])

    const setKey = (index, info) => {
        var keyColorsCopy = JSON.parse(JSON.stringify(keyColors));
        keyColorsCopy[index] = info
        setKeyColors(keyColorsCopy)
    }

    const commandKeys = {
        "Windows" : "./img/windows-logo.png",
        "Linux" : "./img/linux-icon.png",
        "MacOS" : "./img/macos-cmd-logo.png"
    }

    const colors = {
            "Black" : "#030303",
            "Maroon" : "#800000",
            "Brown" : "#825A2C",
            "Taupe" : "#87794E",
            "Crimson" : "#A20025",
            "Red" : "#FF0000",
            "Orange" : "#FFA500",
            "Amber" : "#e3fc03",
            "Yellow" : "#FFFF00",
            "Olive" : "#808000",
            "Purple" : "#A020F0",
            "Fuchsia" : "#FF00FF",
            "White" : "#FFFFFF",
            "Lime" : "#00FF00",
            "Green" : "#008000",
            "Navy" : "#000080",
            "Blue" : "#0000FF",
            "Aqua" : "#00FFFF",
            "Teal" : "#008080",
            "Silver" : "#C0C0C0",
            "Gray" : "#808080"
        }

    const fonts = {
        "Charis" : "'Charis SIL', serif;",
        "Open Sans" : "'Open Sans', sans-serif;",
        "Oswald" : "'Oswald', sans-serif;",
        "Itim" : "'Itim', cursive;"
        }

    useEffect(() => {
        const keyboardsFetched = getKeyboards();
        keyboardsFetched
            .then(result => setKeyboards(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    return <div className="customize-page">
        {
            /*Page de customisation de clavier pour l'utilisateur avec 3 ??tapes de modifications : le choix de la puce, le choix des couleurs des touches et le choix de la police sur le clavier */
        }
        {
            show == 0 ? (
                <div className="first-slide">
                    <h1>Customize your keyboard</h1>
                    <Row>
                        <Col xs={{ span:4 , offset:4 }} className="links">
                            <Link onClick={() => setShow(1)} className="button-design" style={{backgroundImage: `url(${diagBlob1})`, userSelect : 'none'}}>Start Here !</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
        {
            show == 1 ? (
                <div className="second-slide">
                    <h1>Choix du clavier</h1>
                    <Row>
                        {
                            keyboards.map((keyboard, key) => {
                                return <Col md={4}>
                                <div key={key}>
                                    <Card style={{ width: '18rem' }} className="card-margin">
                                        <div className="size-img-card-div">
                                            <Card.Img className="size-img-card" variant="top" src={keyboard.images[0]} alt="test" />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="card-link">{keyboard.name}</Card.Title>
                                            <Card.Text>
                                                <p>{keyboard.description}</p>
                                                <p>Price : {keyboard.price}???</p>
                                            </Card.Text>
                                            <Button onClick={() => {
                                                setShow(2);
                                                setKeyboard(keyboard);
                                                }} className="button-card-product">Select</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            })
                        }
                        <Button onClick={() => setShow(2)} className="button-card-product">Select</Button>
                    </Row>
                    <h2>Si vous avez du mal a chosir : </h2>
                    <Row>
                        <Col xs={{span:4, offset:4}}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/HB309x2bU4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    <Row className="links">
                        <Col xs={3}>
                            <Link onClick={() => setShow(0)} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
        {
            show == 2 ? (
                <Row>
                    <Col xs={{ span:9, offset:1}}>
                        <div className="third-slide">
                            <h1>Couleurs</h1>
                            <div className="edit-type-selector">
                                <Button onClick={() => setEditKeys(true)}>Keys</Button>
                                <Button onClick={() => setEditKeys(false)}>Text</Button>
                                <p style={{color : "white"}}>{editKeys}</p>
                            </div>
                            <div className="colors-selector">
                                {
                                    Object.entries(colors).map(([key, color]) =>{
                                        return <Button onClick={() => setSelectedColor(key)} style={{ backgroundColor : color, borderColor : color}}></Button>
                                    })
                                }
                                <p style={{color : "white"}}>{selectedColor}</p>
                            </div>
                            <div className="keyboard-display">
                                {
                                    keyColors.map((key, index) => {
                                        return <button style={{
                                            "background-color": key.key,
                                            "color": key.text
                                        }} onClick={() => {
                                            setKey(index, {
                                                "key": editKeys ? colors[selectedColor] : key.key,
                                                "text": !editKeys ? colors[selectedColor] : key.text
                                            })
                                        }}>{index}</button>
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Row className="links">
                        <Col xs={3}>
                            <Link onClick={() => setShow(1)} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                        </Col>
                        <Col xs={{ span:3 , offset:6 }}>
                            <Link onClick={() => setShow(3)} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Next</Link>
                        </Col>
                    </Row>
                </Row>
            ) : <></>
        }
        {
            show == 3 ? (
                <div className="fourth-slide" style={{textAlign: "center"}}>
                    <h1>Finalisation</h1>
                    <h2>Font</h2>
                    {
                        showB == 0 ? (
                                <div className="font-selector">
                                        {
                                            Object.entries(fonts).map(([font, key]) => {
                                                return <Button onClick={() => setFont(font)} className="select-buttons">{font}</Button>
                                            })
                                        }
                                        <Button onClick={() => setShowB(1)}>Valider</Button>
                                </div>
                        ) : (
                            <div>
                                <h3>{finishedProduct.font}</h3>
                                <Button onClick={() => setShowB(0)}>Retour</Button>
                            </div>
                        )
                    }
                    <h2>Command Key</h2>
                    {
                        showC == 0 ? (
                            <div className="cmd-key-selector">
                                {
                                    Object.entries(commandKeys).map(([commandKey, key]) => {
                                        return <Button onClick={() => setCmdKey(commandKey)} className="select-buttons"><img src={key} alt={commandKey+" logo"}/></Button>
                                    })
                                }
                                <Button onClick={() => setShowC(1)}>Valider</Button>
                            </div>
                        ) : (
                            <div>
                                <h3>{finishedProduct.cmdkey}</h3>
                                <Button onClick={() => setShowC(0)}>Retour</Button>
                            </div>
                        )
                    }
                    <Row className="links">
                        <Col xs={3}>
                            <Link onClick={() => setShow(2)} className="button-design" style={{backgroundImage: `url(${diagBlob1})`}}>Previous</Link>
                        </Col>
                    </Row>
                </div>
            ) : <></>
        }
    </div>
}

export default Customize;