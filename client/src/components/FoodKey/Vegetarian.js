import React from "react";
import Row from "../Row";
import Image from "../Image";
import vegIcon from "./icons8-vegetarian-mark-144.png";

export default function Vegetarian () {
    return (
        <Row>
        <h5 id="vegetarian"><Image src={vegIcon} width="19" alt="Vegetarian" /> Vegetarian</h5>
        </Row>
    )
}