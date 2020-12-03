import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

function MenuItems(props) {
        return (
                <>
                <h5 className={props.oncePerOrder}>{props.name} {props.fish ? <FontAwesomeIcon icon={faFish} />: <span></span>}</h5>
                <h6>$ {props.price}</h6>
                <p>{props.description}</p>
                {props.children}
                </>
        )
}

export default MenuItems;