import { Container } from "react-bootstrap";
import{ getUsers, getSales, getProducts } from '../api/db';
import{ deleteUser } from '../api/backend';
import React,{useEffect,useState} from "react";
import "./css/Admin.css";

function Admin({ user, setUser, info }) {

    const [ products, setProducts ] = useState([]);
    const [ sales, setSales ] = useState([]);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const productsFetched = getProducts();
        productsFetched
            .then(result => setProducts(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));

        const salesFetched = getSales();
        salesFetched
            .then(result => setSales(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));

        const usersFetched = getUsers();
        usersFetched
            .then(result => setUsers(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="admin-page">
        {
            /*Page qui permet aux admins de modifier l'interieur des pages sans aller dans el code du  */
        }
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
                    {
                        /* Historique des transactions */
                    }
                    <h3>Transaction history</h3>
                    <p>
                        {
        	                sales.map((sales, key) => {
		                    return <div key={key} className="sales-box">{sales._id} {sales.time} {sales.user_id} {sales.type} {sales.sold_id} </div>;
        	                })
                        }
                    </p>
                </div>
                <div>
                    <h3>Discount codes</h3>
                    <h4>Activate code</h4>
                    <h4>Deactivate code</h4>
                </div>
                <div>
                    {
                        /* Produits Disponible sur le site */
                    }
                    <h3>Products</h3>
                    <div>
                        {
                            products.map((products, key) => {
                            return <div key={key} className="products-box">{products._id} {products.name} {products.price} {products.type} {products.description} {products.images} {products.tags} {products.quantity} <h4>Add</h4>
                            <h4>Edit</h4>
                            <h4>Remove</h4> 
                            </div>;
                            })
                        }
                    </div>
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
                    {
                        /* Informations des Utilisateurs */
                    }
                    <h3>Users info</h3>
                    <div>
	                    {
        	                users.map((users, key) => {
		                    return <div key={key} className="users-box">{users.email} {users.first_name} {users.last_name} {users.permission_level} {users.newsletter} {users.custom_save_id} {users.favorite_id} <button onClick={() => deleteUser(users.email)}>Delete</button></div>;
        	                })
                        }
                    </div>
                </div>
            </Container>
        </div>
    </div>
}

export default Admin