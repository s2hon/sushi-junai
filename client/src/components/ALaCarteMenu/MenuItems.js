import React from "react";
import Image from "./Image";
import vegIcon from "../AyceMenu/icons8-vegetarian-mark-48.png";
import gfIcon from "../AyceMenu/icons8-color-50.png";
import fishIcon from "../AyceMenu/icons8-dressed-fish-50.png";
import { Col } from 'reactstrap';

function MenuItems(props) {
        return (
                <>
                <Col sm="1" md="3" lg="3">
                        <h5>{props.name} <br/> 
                        
                        {props.fish ? 
                        <a href="#rawfish"><Image src={fishIcon} width="18" alt="Fish" /></a>
                        : <span></span>}
                        {
                                props.vegetarian ?
                                <a href="#vegetarian"><Image src={vegIcon} width="18" alt="Vegetarian" /></a>
                                : <span></span>
                        }
                        {
                                props.glutenFree ?
                                <a href="#glutenFree"><Image src={gfIcon} width="18" alt="Gluten Free" /></a>
                                : <span></span>
                        }
                        </h5>
                        $ {props.price.toFixed(2)}
                </Col>
                <Col sm="auto">
                        <p>{props.description}
                        
                        </p>
                </Col>
                {props.children}
                </>
        )
}

export default MenuItems;