import React from "react";
import { Col } from 'reactstrap';
import star from "../FoodKey/icons8-star-256.png";
import heart from "../FoodKey/icons8-heart-256.png";
import Image from "../Image";

function MenuItems(props) {
    return (
        <>
            <Col sm="3" md="3" lg="3">
                <h5>{props.name} <br />
                    {
                        props.popular ?
                        <a href="#popular"><Image src={star} width="18" alt="most popular" /></a>
                        : <span></span>
                    }
                    {
                        props.staffpick ?
                        <a href="#staffpick"><Image src={heart} width="18" alt="staff pick" /></a>
                        : <span></span>
                    }
                </h5><h6>{props.subtitle}</h6>
                <p>$ {props.price ? props.price.toFixed(2): "" }
                {props.smallPrice ? props.smallPrice.toFixed(2) + " | $ ": "" }
                {props.glassPrice ? props.glassPrice.toFixed(2) + " | $ ": "" }
                {props.largePrice ? props.largePrice.toFixed(2) : ""}
                {props.bottlePrice ? "" + props.bottlePrice.toFixed(2) : ""}</p>
            </Col>
            <Col sm="9" md="9" lg="9">
                <p>{props.size || props.origin}</p>
                <p>{props.description}
                {props.drinks ? props.drinks.join(", ") : ""}</p>
            </Col>
            {props.children}
        </>
    )
}

export default MenuItems;