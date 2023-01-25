import { Container } from "react-bootstrap";
import "./Contact.css";

function Contacts() {
    return <div className="contact-page">
            <h1 className="title">Page de Contact</h1>
            <div className="content">
                <div>
                    <img src="/img/keyboard-icon.png" class="keyboard-icon" alt="Keyboard Icon"></img>
                    <h2>Produit Et Commandes</h2>
                    <p>
                        num : +33 (0) 685457565 <br/>
                        horraire : 9:00 - 21:00 <br/>
                        jours : Lundi - Vendredi <br/>
                        horraire : 9:00 - 18:00 <br/>
                        jours : Samedi <br/>
                    </p>
                </div>
                <div>
                    <img src="/img/message-icon.png" class="message-icon" alt="Message Icon"></img>
                    <h2>Produit Et Commandes</h2>
                    <p>
                        +33 (0) 685457565 <br/>
                        9:00 - 21:00 <br/>
                        Lundi - Vendredi <br/>
                        9:00 - 18:00 <br/>
                        Samedi <br/>
                    </p>
                </div>
            </div>
    </div>
}

export default Contacts;