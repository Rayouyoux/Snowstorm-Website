import { Row, Col, Container } from "react-bootstrap";
import { backAccess } from "../api/db";
import { useEffect, useState } from "react";
import "./Home.css";

function Home(props) {
    const [ backendTest, setBackendTest ] = useState('LOADING...')

    useEffect(() => {
        backAccess.get('/')
        .then(res => setBackendTest(res.data))
        .catch(e => setBackendTest(e.message))
    }, [])

    return <div className="home-page">
        <Row>
            <Col xs={{ span:2 , offset:1 }}>
                <h1>Snowstorm</h1>
            </Col>
        </Row>





        <p>{backendTest}</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
}

export default Home;