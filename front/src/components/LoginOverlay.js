import { Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import {login, register} from '../api/backend';
import "./LoginOverlay.css"

function LoginOverlay() {
    const [show, setShow] = useState(false);
    const [whichForm, setWhichForm] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <>
            <img onClick={handleShow} src="/img/user_icon.png" className="user-icon" alt="User Icon" />

            {!whichForm ? <Modal show={show} onHide={handleClose} className="full-modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Connexion
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Adresse Email</Form.Label>
                                <Form.Control {...register("email", { required: true })} type="email" placeholder="nom@exemple.com" autoFocus/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mot de Passe</Form.Label>
                                <Form.Control {...register("password", { required: true })} type="password" placeholder="Mot de Passe" />
                            </Form.Group>
                        </Form>
                </Modal.Body>

                <Modal.Footer className="modal-footer">
                        <Row>
                            <Col xs={6}>
                                <Button variant="dark" onClick={() => setWhichForm(true)}>
                                    S'inscrire
                                </Button>
                            </Col>
                            <Col xs={6} className="right-column">
                                <Button variant="secondary" onClick={handleSubmit}>
                                    Se Connecter
                                </Button>
                            </Col>
                        </Row>
                </Modal.Footer>
            </Modal>:null}
            
            
            {whichForm ? <Modal show={show} onHide={handleClose} className="full-modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Inscription
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <Form>
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
                                <Form.Control {...register("email", { required: true })} type="email" placeholder="nom@exemple.com"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mot de Passe</Form.Label>
                                <Form.Control {...register("password", { required: true })} type="password" placeholder="Mot de Passe" />
                            </Form.Group>
                            {/*FORGOTTEN PASSWORD ?*/}
                        </Form>
                </Modal.Body>

                <Modal.Footer className="modal-footer">
                        <Row>
                            <Col xs={6}>
                                <Button variant="dark" onClick={() => setWhichForm(false)}>
                                    Se connecter
                                </Button>
                            </Col>
                            <Col xs={6} className="right-column">
                                <Button variant="secondary" onClick={handleSubmit}>
                                    S'inscrire
                                </Button>
                            </Col>
                        </Row>
                </Modal.Footer>
            </Modal>:null}
        </>
    );
}

export default LoginOverlay