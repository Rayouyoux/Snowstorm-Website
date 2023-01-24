import { Row, Col, Container } from "react-bootstrap";
import { backAccess } from "../api/db";
import { useEffect, useState } from "react";

function Home(props) {
    const [ backendTest, setBackendTest ] = useState('LOADING...')

    useEffect(() => {
        backAccess.get('/')
        .then(res => setBackendTest(res.data))
        .catch(e => setBackendTest(e.message))
    }, [])

    return <div className="homePage">
        <h1>HOME et une harmacie</h1>
        <h2>ntm test blup blup uhebuoyv</h2>
        <h3>et didier est mort, il nous a quitt..eeeeeeeeeeeeeeeee.</h3>
        <p>{backendTest}</p>
    </div>
}

export default Home;