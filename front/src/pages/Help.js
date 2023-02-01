import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import {useNavigate} from 'react-router-dom'; 
import { useForm } from "react-hook-form";
import { update } from '../api/backend';
import "./css/Help.css";

function Help() {
    const handleSubmit  = useForm();
    const onSubmit = (data) => {
        update(data.email, data.password).then(data => {
            if (data.msg === "OK") {
                return //TODO: Handle back home 
            }
            else
                console.log(data.msg) // TODO: Handle errors (Show them somewhere idk.)
        })
    }
    
    return <div className="text">
        <h1>AH</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control {...update("email", { required: true })} type="email" placeholder="nom@exemple.com" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control {...update("password", { required: true })} type="password" placeholder="Mot de Passe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirmer Mot de Passe</Form.Label>
                    <Form.Control {...update("verifPassword", { required: true })} type="password" placeholder="Confirmer Mot de Passe" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Modifier
                </Button>
            </Modal.Body>
        </Form>
    </div>
}

export default Help;