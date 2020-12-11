import React from "react";
import Row from "../Row";
import Image from "../Image";
import vegIcon from "./icons8-vegetarian-mark-144.png";

export default function Vegetarian () {
    return (
        <Row>
        <h5 id="vegetarian">Vegetarian <Image src={vegIcon} width="18" alt="Vegetarian" /></h5>
        </Row>
    )
}