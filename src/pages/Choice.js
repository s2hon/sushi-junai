import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Row from "../components/Row";

function Choice () {
    return (<Container>
        <Nav/>
        <Row>
        <h4>Get the items you love</h4>
        <Link to="alacarte">
            <button className="btn btn-warning"> 
                    A la Carte
            </button>
        </Link>
        </Row>
        <Row>
        <h4>First time? Try All You Can Eat and taste our delicious dishes.</h4>
        <Link to="alacarte">
            <button className="btn btn-danger"> 
                    All You Can Eat
            </button>
        </Link>
        </Row>
    </Container>)
}

export default Choice;