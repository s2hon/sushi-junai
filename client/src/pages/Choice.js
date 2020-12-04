import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Button from "../components/Button"

function Choice () {
    return (<Container>
        <Row>
        <h4>Get the items you love</h4>
            <Link to="/alacarte">
                <Button type={"button"} btn={"btn btn-dark"}>A La Carte</Button>
            </Link>
        </Row>
        <Row>
        <h4>Try All You Can Eat and taste our delicious dishes.</h4>
            <Link to="/rules">
                <Button type={"button"} btn={"btn btn-dark"}>All You Can Eat</Button>
            </Link>
        </Row>
    </Container>)
}

export default Choice;