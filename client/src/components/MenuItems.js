import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { Col } from 'reactstrap';

function MenuItems(props) {
        return (
                <>
                <Col sm="1" md="3" lg="3">
                        <h5 className={props.oncePerOrder}>{props.name} <br/> 
                        {props.fish ? 
                        <a href="ayce#rawfish"><FontAwesomeIcon icon={faFish} /></a>
                        : <span></span>}
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