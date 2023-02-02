import { logout } from '../api/backend';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUserKeyboards } from '../api/db';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { update } from '../api/backend';
import "./css/User.css"


function User({ user, setUser }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [customKeyboards, setCustomKeyboards] = useState([]);
    const handleShow = () => setShow(true);
    const { handleSubmit } = useForm();
    const onSubmit = (data) => {
        update(data.updateEmail, data.updatePassword, data.updateFirst_name, data.updateLast_name).then(data => {
            if (data.msg == "OK") {
                setUser(data.userInfo)
                handleClose()
            }
            else
                console.log(data.msg) // TODO: Handle errors (Show them somewhere idk.)
        })
    };

    useEffect(() => {
        const myCustoms = getUserKeyboards(null,user._id);
        myCustoms
            .then(result => setCustomKeyboards(result))
            .catch(error => console.error("Erreur avec l'API :", error.message));
    }, []);



    return (
        <div className="user-page">
            <h1>Hello, {user.first_name} {user.last_name}!</h1>
            {/*Disconnect button*/}
            <Link to="/" onClick={() => { logout().then(data => { if (data.msg == "OK") setUser() }) }}>disconnect</Link>
            {/*Order History (accordéon ?) Date et Items*/}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Order History</h2></Accordion.Header>
                    <Accordion.Body>
                        *Recent Orders*
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/*Saved/Fav /Custom Builds*/}
            <h2>Your Builds</h2>
            <h3>Saved</h3>
            <h3>Favorites</h3>
            <h3>Custom</h3>
            <div>
                {/*all the values in customKeyboard: .name .price .description .images(array) .tags(array) .ranking .components(array)*/
                    customKeyboards.map((customKeyboard, key) => {
                        return <div key={key} className="custom-keyboard-box">{customKeyboard.name} {customKeyboard.price}</div>;
                    })
                }
            </div>
            {/*Account settngs*/}
            <h2>Account Settings</h2>
            <button onClick={handleShow}>Change Password</button>
            <Modal show={show} onHide={handleClose} className="full-modal">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Change Password
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Adresse Email</Form.Label>
                            <Form.Control {...update("updateEmail", { required: true })} type="email" defaultValue={user.email} autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mot de Passe</Form.Label>
                            <Form.Control {...update("updatePassword", { required: true })} defaultValue={user.pasword} /> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control {...update("updateFirst_name", { required: true })} defaultValue={user.first_name} /> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control {...update("updateLast_name", { required: true })} defaultValue={user.last_name} /> 
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Confirm Changes
                        </Button>  
                    </Modal.Body>
                </Form>
            </Modal>
        </div>
    )
};

export default User;