import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faLeaf, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { Col } from 'reactstrap';

function MenuItems(props) {
    return (
        <>
            <Col sm="1" md="3" lg="3">
                <h5>{props.name} <h6>{props.subtitle}</h6>
                </h5>
                        $ {props.price ? props.price : props.smallPrice + props.largePrice}
            </Col>
            <Col sm="auto">
                <p>{props.size}</p>
                <p>{props.description}</p>
            </Col>
            {props.children}
        </>
    )
}

export default MenuItems;