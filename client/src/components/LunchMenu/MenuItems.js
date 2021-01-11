import React from "react";
import Image from "../Image";
import fishIcon from "../FoodKey/icons8-dressed-fish-144.png";
import star from "../FoodKey/icons8-star-256.png";
import heart from "../FoodKey/icons8-heart-256.png";
import { Col } from 'reactstrap';

function MenuItems(props) {
        return (
                <>
                        <Col sm="3" md="3" lg="3">
                                <h5>{props.name} <br />
                                        {
                                                props.fish ?
                                                <a href="#rawfish"><Image src={fishIcon} width="18" alt="Raw Fish" /></a>
                                                : <span></span>
                                        }
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
                                </h5>
                                <p>$ {props.price}</p>
                                <p>{props.servings}</p>
                        </Col>
                        <Col sm="9" md="9" lg="9">
                                <p>{props.description}</p>
                        </Col>
                </>
        )
}

export default MenuItems;