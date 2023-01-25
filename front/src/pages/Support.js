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
                                <Form.Label>Nom</Form.Label>
                            </Col>
                            <Col xs={12} md={10}>
                                <Form.Control placeholder="..." />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} md={2}>
                                <Form.Label>Prénom</Form.Label>
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
                                <Form.Label>Email</Form.Label>
                            </Col>
                            <Col xs={12} md={10}>
                                <Form.Control placeholder="Exemple@email.com" />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} md={2}>
                                <Form.Label>Téléphone</Form.Label>
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
                                <Form.Label>Adresse</Form.Label>
                            </Col>
                            <Col xs={12} md={10}>
                                <Form.Control placeholder="..." />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12} md={2}>
                                <Form.Label>Pays</Form.Label>
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
                        <Form.Label>Sujet</Form.Label>
                    </Col>
                    <Col xs={12} md={11}>
                        <Form.Control placeholder="..." />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Row>
                    <Col xs={12} md={1}>
                        <Form.Label>Message</Form.Label>
                    </Col>
                    <Col xs={12} md={11}>
                        <Form.Control as="textarea" rows={4} />
                    </Col>
                </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    </div>
    );
}

export default Support;