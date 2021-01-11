import React from "react";
import Row from "../Row";
import Container from "../Container";
import Image from "../Image";
import saladIcon from "./icons8-salad-144.png";

export default function HouseSalad () {
    return (
        <Row>
            <h5 id="housesalad"><Image src={saladIcon} width="18" alt="house salad" /> House Salad</h5>
            <Container>
                <p>House green spring mix served with inhouse made creamy sesame sauce.</p>
            </Container>
        </Row>
    )
}

