import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import countries from '../components/Countries';
import "./Support.css"

/*Mettre en place un formulaire de contact 
(nom, pays, adresse, email, téléphone, sujet, description du pb)
Faire valider un code de vérification pour envoyer le formulaire*/

function Support() {
    return (
        <div className='support-page'>
            <Container>
                <h1>
                    Contactez-Nous!
                </h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>Nom</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder="..." />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>Prénom</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder="..." />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>Email</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control type="email" placeholder="Exemple@email.com" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>Téléphone</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder="06 00 00 00 00" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>Adresse</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder="..." />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>Pays</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Select>
                                            <option>Choisissez votre pays...</option>
                                            {
                                                countries.map(country => {
                                                    return <option value={country.cca2}>{country.name.common}</option>
                                                })
                                            }

                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col xs={12} md={1}>
                                <Form.Label><strong>Sujet</strong></Form.Label>
                            </Col>
                            <Col xs={12} md={11}>
                                <Form.Control placeholder="..." />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col xs={12} md={1}>
                                <Form.Label><strong>Message</strong></Form.Label>
                            </Col>
                            <Col xs={12} md={11}>
                                <Form.Control as="textarea" rows={4} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <div className='d-grid gap-2'>
                                <Button size="lg" variant='dark' type="submit">
                                    Envoyer
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default Support;