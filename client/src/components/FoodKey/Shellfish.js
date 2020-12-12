import React from "react";
import Row from "../Row";
import Image from "../Image";
import shellfishIcon from "./icons8-prawn-144.png";

export default function Shellfish () {
    return (
        <Row>
            <h5 id="shellfish">Contains shellfish <Image src={shellfishIcon} width="18" alt="Shellfish" /></h5>
        </Row>
    )
}