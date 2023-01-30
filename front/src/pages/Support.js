import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import countries from '../components/Countries';
import "./css/Support.css"

/*Mettre en place un formulaire de contact 
(nom, pays, adresse, email, téléphone, sujet, description du pb)
Faire valider un code de vérification pour envoyer le formulaire*/

function Support(props) {
    const supportText = {
        "francais" : {
            "h1" : "Contactez-nous !",
            "f1" : "Nom",
            "f2" : "Prénom",
            "f3" : "Email",
            "f4" : "Téléphone",
            "f5" : "Adresse",
            "f6" : "Pays",
            "f7" : "Sujet",
            "f8" : "Message",
            "p1" : "exemple@email.fr",
            "p2" : "06 00 00 00 00",
            "p3" : "Choisissez Votre Pays",
            "b1" : "Soumettre"
        },
        "english" : {
            "h1" : "Contact Us !",
            "f1" : "L.Name",
            "f2" : "F.Name",
            "f3" : "Email",
            "f4" : "Phone",
            "f5" : "Adress",
            "f6" : "Country",
            "f7" : "Subject",
            "f8" : "Message",
            "p1" : "example@email.com",
            "p2" : "+123 456 789",
            "p3" : "Chosse Your Country",
            "b1" : "Submit"
        }
    };
    const { language, setLanguage } = props;

    return (
        <div className='support-page'>
            <Container>
                <h1>
                    {language == 0 ? supportText.english.h1 : supportText.francais.h1}
                </h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>{language == 0 ? supportText.english.f1 : supportText.francais.f1}</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder="..." />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>{language == 0 ? supportText.english.f2 : supportText.francais.f2}</strong></Form.Label>
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
                                        <Form.Label><strong>{language == 0 ? supportText.english.f3 : supportText.francais.f3}</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control type="email" placeholder={language == 0 ? supportText.english.p1 : supportText.francais.p1} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>{language == 0 ? supportText.english.f4 : supportText.francais.f4}</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder={language == 0 ? supportText.english.p2 : supportText.francais.p2} />
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
                                        <Form.Label><strong>{language == 0 ? supportText.english.f5 : supportText.francais.f5}</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Control placeholder="..." />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col xs={12} md={2}>
                                        <Form.Label><strong>{language == 0 ? supportText.english.f6 : supportText.francais.f6}</strong></Form.Label>
                                    </Col>
                                    <Col xs={12} md={10}>
                                        <Form.Select>
                                            <option>{language == 0 ? supportText.english.p3 : supportText.francais.p3}</option>
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
                                <Form.Label><strong>{language == 0 ? supportText.english.f7 : supportText.francais.f7}</strong></Form.Label>
                            </Col>
                            <Col xs={12} md={11}>
                                <Form.Control placeholder="..." />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Row>
                            <Col xs={12} md={1}>
                                <Form.Label><strong>{language == 0 ? supportText.english.f8 : supportText.francais.f8}</strong></Form.Label>
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
                                    {language == 0 ? supportText.english.b1 : supportText.francais.b1}
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