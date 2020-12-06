import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { Col } from 'reactstrap';

function MenuItems(props) {
        return (
                <>
                <Col sm="3" md="3" lg="3">
                        <h5>{props.name} <br/> 
                        {props.fish ? 
                        <a href="ayce#rawfish"><FontAwesomeIcon icon={faFish} /></a>
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