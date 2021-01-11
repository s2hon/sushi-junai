import React from "react";
import Row from "../Row";
import Image from "../Image";
import heart from "./icons8-heart-256.png";

export default function StaffPick () {
    return (
        <Row>
            <h5 id="staffpick"><Image src={heart} width="19" alt="Staff Pick" /> Staff Pick</h5>
        </Row>
    )
}