import React from "react";
import {useHistory} from "react-router-dom";

function BackButton () {
    let history = useHistory();

    return (
        <>
        <button type="button" className="btn btn1 btn-lrg" onClick={()=>history.goBack()}>Go back</button>
        </>
    )
}

export default BackButton;