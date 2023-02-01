import { Row, Col } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, register as signup } from '../api/backend';
import "./css/Help.css";

function Help() {
    return <div className="text">
        <h1>AH</h1>
        <Form>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control type="email" placeholder="nom@exemple.com" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de Passe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirmer Mot de Passe</Form.Label>
                    <Form.Control type="password" placeholder="Confirmer Mot de Passe" />
                </Form.Group>
            </Modal.Body>
        </Form>
    </div>
}

export default Help;