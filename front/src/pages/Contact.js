import { Container } from "react-bootstrap";
import "./Contact.css";

function Contacts() {
    return <div className="contact-page">
            <h1 className="title">Page de Contact</h1>
            <div className="content">
                <div>
                    <img src="/img/keyboard-icon.png" class="keyboard-icon" alt="Keyboard Icon"></img>
                    <h2>Produit Et Commandes</h2>
                    <div className="text">
                        <p>
                            num : <br/>
                            horraire :  <br/>
                            jours :  <br/>
                            horraire :  <br/>
                            jours : <br/>
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/img/message-icon.png" class="message-icon" alt="Message Icon"></img>
                    <h2>Partenariat et Autre</h2>
                    <div className="text">
                        <p>
                            email :<br/>
                            adresse : <br/>
                            horraire :<br/>
                            jours : <br/>
                            horraire : <br/>
                            jours : <br/>
                        </p>
                    </div>
                </div>
            </div>
    </div>
}

export default Contacts;