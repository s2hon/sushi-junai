import React from "react";
import Row from "../Row";
import Image from "../Image";
import star from "./icons8-star-256.png";

export default function Popular () {
    return (
        <Row>
            <h5 id="popular"><Image src={star} width="18" alt="Most Popular" /> Best Sellers ☆ Sushi Junai Fans Approved</h5>
        </Row>
    )
}