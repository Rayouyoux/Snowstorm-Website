import { logout } from '../api/backend';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { getUserKeyboards } from '../api/db';
import React, { useEffect, useState } from "react";
import "./css/User.css"


function User({ user, setUser }) {

    const [customKeyboards, setCustomKeyboards] = useState([]);

    useEffect(() => {
        const myCustoms = getUserKeyboards(null,user._id);
        myCustoms
            .then(result => setCustomKeyboards(result))
            .catch(error => console.error("Erreur avec l'API :", error.message));
    }, []);



    return (
        <div className="user-page">
            <h1>Hello, {user.first_name} {user.last_name}!</h1>
            <p>{user.permission_level}</p>
            {/*Disconnect button*/}
            <Link to="/" onClick={() => { logout().then(data => { if (data.msg == "OK") setUser() }) }}>disconnect</Link>
            {/*Order History (accordéon ?) Date et Items*/}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>Order History</h2></Accordion.Header>
                    <Accordion.Body>
                        *Recent Orders*
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/*Saved/Fav /Custom Builds*/}
            <h2>Your Builds</h2>
            <h3>Saved</h3>
            <h3>Favorites</h3>
            <h3>Custom</h3>
            <div>
                {/*all the values in customKeyboard: .name .price .description .images(array) .tags(array) .ranking .components(array)*/
                    customKeyboards.map((customKeyboard, key) => {
                        return <div key={key} className="custom-keyboard-box">{customKeyboard.name} {customKeyboard.price}</div>;
                    })
                }
            </div>
            {/*Account settngs*/}
            <h2>Account Settings</h2>
            <h3>Password Change</h3>
        </div>
    )
};

export default User;