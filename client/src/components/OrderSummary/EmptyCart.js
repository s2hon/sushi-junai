import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Image from "../Image";
import shockedIcon from "./icons8-surprised-50.png"
import sadIcon from "./icons8-sad-50.png";

export default function EmptyCart () {
    return (
        <React.Fragment>
            <tbody className="mainFont">
                <td></td>
            <h2>
                <Image src={shockedIcon} width="25" alt="shockedMaki" /> 
            whatsabi? you have 0 items in your order summary?
                <Image src={sadIcon} width="25" alt="sadMaki" />
            <br/> 
                <Link
                    to="/ayce"
                    className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                >
            Go HERE
                </Link>
            and order ebi-thing with a dining staff! 
            <br/> 
            Let's Roll!</h2>
            </tbody>
        </React.Fragment>
    )
}