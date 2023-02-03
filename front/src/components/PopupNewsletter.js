import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { newsletterOn }  from '../api/backend.js';
import "./css/PopupNewsletter.css";

function NewsletterSignup({ user, setUser,  language, setLanguage}) {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <ToastContainer className="p-3" position='bottom-end' containerPosition='position-fixed'>
        {
            /*Pop-up d'inscription à la Newsletter */
        }
            <Toast bg="secondary" show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <strong className="me-auto">{["Subscribe to our newsletter !", "Abonnez-vous à notre Newsletter !"][language]}</strong>
                </Toast.Header>
                <Toast.Body className='promptFrame'>
                    <Form>
                        <Row>
                            <Col xs={12} md={8}>
                                <p><strong>{["Receive emails about news and discounts today !", "Restez informés sur les nouvelles et promotions !"][language]}</strong></p>
                            </Col>
                            <Col xs={12} md={4}>
                                <Button variant="dark" type="submit" onClick={() => newsletterOn(user.email)}>
                                    {["Subscribe", "S'abonner"][language]}
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