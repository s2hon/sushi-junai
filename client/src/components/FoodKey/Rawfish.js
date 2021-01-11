import React from "react";
import Row from "../Row";
import Container from "../Container";
import Image from "../Image";
import fishIcon from "./icons8-dressed-fish-144.png";

export default function RawFish () {
    return (
        <Row>
            <h5 id="rawfish"><Image src={fishIcon} width="18" alt="Raw Fish" /> Raw Fish</h5>
            <Container>
                <p>Consuming raw or undercooked fish increases the risk of food bourne diseases, especially in people with certain health conditions.</p>
            </Container>
        </Row>
    )
}

