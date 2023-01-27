import { Container } from "react-bootstrap";
import "./css/Admin.css";

function Admin() {
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
            </Container>
        </div>
    </div>
}

export default Admin