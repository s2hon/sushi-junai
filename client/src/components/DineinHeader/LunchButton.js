import React from "react";
import { Link } from "react-router-dom";


export default function LunchButton () {
    return (
        <li><Link to="/dinein-lunch" title="">Lunch Specials (Mon-Fri)</Link></li>
    )
}

