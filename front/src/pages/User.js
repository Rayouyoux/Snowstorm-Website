import { logout } from '../api/backend';
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { getUserKeyboards } from '../api/db';
import React, { useEffect, useState } from "react";
import "./css/User.css"

function User({ user, setUser }) {
    const [myCustoms, setMyCustoms] = useState([]);

    useEffect(() => {

        const customKeyboards = getUserKeyboards(user._id);
        customKeyboards
            .then(result => setMyCustoms(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
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
            {}
            {/*Account settngs*/}
            <h2>Account Settings</h2>
            <h3>Password Change</h3>
        </div>
    )
};

export default User;