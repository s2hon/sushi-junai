import React from "react";
import fishIcon from "../AyceMenu/icons8-fish-food-50.png"
import Image from "../Image"
import { Col } from 'reactstrap';

function MenuItems(props) {
        return (
                <>
                <Col sm="3" md="3" lg="3">
                        <h5>{props.name} <br/> 
                        {props.fish ? 
                        <a href="ayce#rawfish"><Image src={fishIcon} width="18" alt="Fish" /></a>
                        : <span></span>}
                        </h5>
                        $ {props.price}
                </Col>
                <Col sm="9" md="9" lg="9">
                        <p>{props.description}
                        
                        </p>
                </Col>
                </>
        )
}

export default MenuItems;