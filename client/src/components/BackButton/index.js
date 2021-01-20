import React from "react";
import {useHistory} from "react-router-dom";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function BackButton () {
    let history = useHistory();

    return (
        <>
        <button style={{float: "left"}} type="button" className="btn btn2" onClick={()=>history.goBack()}><FontAwesomeIcon icon={faAngleLeft}/></button>
        </>
    )
}

export default BackButton;