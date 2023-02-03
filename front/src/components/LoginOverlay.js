import { Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, register as signup } from '../api/backend';
import "./css/LoginOverlay.css"

function LoginOverlay({user, setUser}) {
    const [show, setShow] = useState(false);
    const [whichForm, setWhichForm] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (whichForm) {
            signup(data.email, data.password, data.first_name, data.last_name).then(data => {
                if (data.msg == "OK") {
                    setUser(data.userInfo)
                    handleClose()
                }
                else
                    console.log(data.msg) // TODO: Handle errors (Show them somewhere idk.)
            })
        } else {
            //console.log(data.loginEmail,data.loginPassword);
            login(data.loginEmail, data.loginPassword).then(data => {
                if (data.msg == "OK") {
                    setUser(data.userInfo)
                    handleClose()
                }
                else
                    console.log(data.msg) // TODO: Handle errors (Show them somewhere idk.)
            })
        }
    };

    return (
        <>
        {
            /*Outil de connexion pour l'utilisateur et les administrateur */
        }
            <img onClick={handleShow} src="/img/user_icon.png" className="user-icon" alt="User Icon" />

            {!whichForm ? <Modal show={show} onHide={handleClose} className="full-modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Connexion
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Adresse Email</Form.Label>
                            <Form.Control {...register("loginEmail", { required: true })} type="email" placeholder="nom@exemple.com" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control {...register("loginPassword", { required: true })} type="password" placeholder="Mot de Passe" />
                        </Form.Group>
                        <Row>
                            <Col xs={6}>
                                <Button variant="secondary" onClick={() => setWhichForm(true)}>
                                    S'inscrire
                                </Button>
                            </Col>
                            <Col xs={6} className="right-column">
                                <Button variant="dark" type="submit">
                                    Se Connecter
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Form>
            </Modal> : null}


            {whichForm ? <Modal show={show} onHide={handleClose} className="full-modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Inscription
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control {...register("last_name", { required: true })} placeholder="Nom" autoFocus />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control {...register("first_name", { required: true })} placeholder="Prénom" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Adresse Email</Form.Label>
                            <Form.Control {...register("email", { required: true })} type="email" placeholder="nom@exemple.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control {...register("password", { required: true })} type="password" placeholder="Mot de Passe" />
                        </Form.Group>
                        <Row>
                            <Col xs={6}>
                                <Button variant="secondary" onClick={() => setWhichForm(false)}>
                                    Se connecter
                                </Button>
                            </Col>
                            <Col xs={6} className="right-column">
                                <Button variant="dark" type="submit">
                                    S'inscrire
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Form>
            </Modal> : null}
        </>
    );
}

export default LoginOverlay