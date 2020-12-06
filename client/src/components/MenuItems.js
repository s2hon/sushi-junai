import React from "react";
import Image from "./Image";
import fishIcon from "./AyceMenu/icons8-fish-food-50.png"
import vegIcon from "./AyceMenu/icons8-vegetarian-mark-50.png"
import gfIcon from "./AyceMenu/icons8-no-gluten-50.png"
import { Col } from 'reactstrap';

function MenuItems(props) {
        return (
                <>
                <Col sm="1" md="3" lg="3">
                        <h5 className={props.oncePerOrder}>{props.name} <br/> 
                        
                        {props.fish ? 
                        <a href="ayce#rawfish"><Image src={fishIcon} width="18" alt="Fish" /></a>
                        : <span></span>}
                        {
                                props.vegetarian ?
                                <a href="ayce#vegetarian"><Image src={vegIcon} width="18" alt="Vegetarian" /></a>
                                : <span></span>
                        }
                        {
                                props.glutenFree ?
                                <a href="ayce#glutenFree"><Image src={gfIcon} width="18" alt="Gluten Free" /></a>
                                : <span></span>
                        }
                        </h5>
                        $ {props.price}
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