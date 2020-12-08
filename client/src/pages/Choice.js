import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Row, Col } from "reactstrap";
import Button from "../components/Button"

function Choice () {
    return (
    <Container>
        <div className="menu-container">
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{marginTop: 50,marginBottom: 50}}>
            
            <Link to="/alacarte">
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h1>À La Carte</h1>
                <h5>Get the items you love!</h5>
                </Button>
            </Link>
            
            </Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{marginBottom: 50}}>
            
            <Link to="/rules">
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h1>All You Can Eat</h1>
                <h5>Try our delicious dishes!</h5>
                </Button>
            </Link>
            
            </Col>
        </Row>
        </div>
    </Container>)
}

export default Choice;