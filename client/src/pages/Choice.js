import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Row, Col } from "reactstrap";
import Button from "../components/Button"

function Choice () {
    return (
    <Container>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{marginTop: 50,marginBottom: 50}}>
            <h4>Get the items you love!</h4>
            <Link to="/alacarte">
<<<<<<< HEAD
                <Button type={"button"} btn={"btn btn-dark"}>À La Carte</Button>
=======
                <Button type={"button"} btn={"btn btn1"}>A La Carte</Button>
>>>>>>> 3697ee4eec992f78f8f29c0d645e3028bac3db83
            </Link>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{marginBottom: 50}}>
            <h4>Try our delicious dishes!</h4>
            <Link to="/rules">
                <Button type={"button"} btn={"btn btn1"}>All You Can Eat</Button>
            </Link>
            </Col>
        </Row>
    </Container>)
}

export default Choice;