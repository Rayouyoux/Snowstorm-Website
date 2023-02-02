import { Container } from "react-bootstrap";
import{ getUsers } from '../api/db';
import{ deleteUser } from '../api/backend';
import React,{useEffect,useState} from "react";
import "./css/Admin.css";

function Admin({ user, setUser }) {
    
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const usersFetched = getUsers();
        usersFetched
            .then(result => setUsers(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="admin-page">
        <div className="titles">
            <h1>
                Snowstorm
            </h1>
            <h2>
                Administration
            </h2>
        </div>
        <div>
            <Container>
                <div>
                    <h3>Transaction history</h3>
                    <h4></h4>
                </div>
                <div>
                    <h3>Discount codes</h3>
                    <h4>Activate code</h4>
                    <h4>Deactivate code</h4>
                </div>
                <div>
                    <h3>Products</h3>
                    <h4>Add</h4>
                    <h4>Edit</h4>
                    <h4>Remove</h4>
                </div>
                <div>
                    <h3>Filters</h3>
                    <h4>Add</h4>
                    <h4>Remove</h4>
                </div>
                <div>
                    <h3>Customisation</h3>
                    <h4>Add</h4>
                    <h4>Edit</h4>
                    <h4>Remove</h4>
                </div>
                <div>
                    <h3>Rankings ???</h3>
                </div>
                <div>
                    <h3>FAQ</h3>
                    <h4>Add</h4>
                    <h4>Remove</h4>
                </div>
                <div>
                    <h3>Contact info</h3>
                    <h4>Add</h4>
                    <h4>Edit</h4>
                    <h4>Remove</h4>
                </div>
                <div>
                    <h3>Users info</h3>
                    <div>
	                    {
        	                users.map((users, key) => {
		                    return <div key={key} className="users-box">{users.email} {users.first_name} {users.last_name} {users.permission_level} {users.newsletter} {users.custom_save_id} {users.favorite_id} <button onClick={deleteUser(users._id)}>Delete</button></div>;
        	                })
                        }
                    </div>
                </div>
            </Container>
        </div>
    </div>
}

export default Admin