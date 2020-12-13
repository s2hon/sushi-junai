import React from "react";
import Row from "../Row";
import Image from "../Image";
import spicyIcon from "./icons8-chili-pepper-144.png";

export default function Spicy () {
    return (
        <Row>
            <h5 id="spicy">Spicy <Image src={spicyIcon} width="18" alt="Spicy" /></h5>
        </Row>
    )
}