import "./css/Contact.css";

function Contacts({ language, setLanguage, info }) {
    const contactText = {
        "francais" : {
            "h1" : "Page de Contact",
            "h21" : "Informations Produits & Commandes & Questions",
            "h22" : "Informations de Contact Professionel"
        },
        "english" : {
            "h1" : "Contact Page",
            "h21" : "Products, Orders, Questions",
            "h22" : "Business Contact Information"
        }
    };

    return <div className="contact-page">
            <h1 className="title">{language == 0 ? contactText.english.h1 : contactText.francais.h1}</h1>
            <div className="content">
                <div>
                    <img src="/img/keyboard-icon.png" class="keyboard-icon" alt="Keyboard Icon"></img>
                    <h2>{language == 0 ? contactText.english.h21 : contactText.francais.h21}</h2>
                    <div className="text">
                        <p>
                            {info.contact && info.contact.numero[language]}<br/>
                            {info.contact && info.contact.horraire[language]}<br/>
                            {info.contact && info.contact.jours[language]}<br/>
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/img/message-icon.png" class="message-icon" alt="Message Icon"></img>
                    <h2>{language == 0 ? contactText.english.h22 : contactText.francais.h22}</h2>
                    <div className="text">
                        <p>
                            {info.contact && info.contact.email[language]}<br/>
                            {info.contact && info.contact.adresse[language]}<br/>
                            {info.contact && info.contact.horraire[language]}<br/>
                            {info.contact && info.contact.jours[language]}<br/>
                        </p>
                    </div>
                </div>
            </div>
    </div>
}

export default Contacts;