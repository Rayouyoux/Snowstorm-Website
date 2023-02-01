import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import "./css/PopupNewsletter.css";

function NewsletterSignup() {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <ToastContainer className="p-3" position='bottom-end' containerPosition='position-fixed'>
            <Toast bg="secondary" show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="me-auto">Abonnez-vous à notre Newsletter !</strong>
                </Toast.Header>
                <Toast.Body className='promptFrame'>
                    <Form>
                        <Row>
                            <Col xs={12} md={8}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Votre Email" />
                        </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                        <Button variant="dark" type="submit">
                            S'abonner
                        </Button>
                        </Col>
                        </Row>
                    </Form>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default NewsletterSignup;