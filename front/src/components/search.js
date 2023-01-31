import { Button, Col, Form, Row} from "react-bootstrap";
import "./search.css"

function Search(props) {


    return (
        <>
        <Row>
            <Col xs={{ span: 10, offset: 1}}>
                <Form.Group controlId="search">
                    <Form.Control className="searchbar-color" type="search" placeholder="Rechercher un produit ..." onChange={(e) => props.setSearch(e.target.value)}/>
                </Form.Group>
            </Col>
        </Row>
        </>
      );
  }
  
  export default Search;