import React from "react";
import Row from "../Row";
import Container from "../Container";
import Image from "../Image";
import gfIcon from "./icons8-no-gluten-144.png";

export default function GlutenFree () {
    return (
        <Row>
            <h5 id="glutenFree"><Image src={gfIcon} width="18" alt="Gluten Free" /> Gluten Free</h5>
            <Container>
                <p>Request no sauce when ordering. Tamari (GF Soysauce) avaliable upon request.</p>
            </Container>
        </Row>
    )
}