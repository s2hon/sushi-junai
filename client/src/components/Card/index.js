import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faClock,
    faPhone,
    faLocationArrow
 } from "@fortawesome/free-solid-svg-icons";
 import './style.css';

function Card(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
            <div className="location-wrap">
                <div className="location-content">
                    <div className="location-info">
                        <h2>{props.location}</h2>
                        <span><FontAwesomeIcon icon={faLocationArrow} />{props.address}</span>
                        <br />
                        <span><FontAwesomeIcon icon={faPhone} />{props.phone}</span>
                        <ul>
                        <li><FontAwesomeIcon icon={faClock} /></li>
                        <li>Monday {props.mon}</li>
                        <li>Tuesday {props.tue}</li>
                        <li>Wednesday {props.wed}</li>
                        <li>Thursday {props.thu}</li>
                        <li>Friday {props.fri}</li>
                        <li>Saturday {props.sat}</li>
                        <li>Sunday {props.sun}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}



export default Card;