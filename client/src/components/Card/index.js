import React from "react";

function Card(props) {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-center">
            <div className="wpo-event-item">
                <div className="wpo-event-img">
                    <img alt=""/>
                    <div className="thumb-text">
                        <span>{props.id}</span>
                    </div>
                </div>
                <div className="wpo-event-text">
                    <h1>{props.location}</h1>
                    <ul>
                        <li><i className="fa fa-clock-o" aria-hidden="true"></i>Monday {props.mon}</li>
                        <li>Tuesday {props.tue}</li>
                        <li>Wednesday {props.wed}</li>
                        <li>Thursday {props.thu}</li>
                        <li>Friday {props.fri}</li>
                        <li>Saturday {props.sat}</li>
                        <li>Sunday {props.sun}</li>

                        <li><i className="fa fa-map-marker-alt"></i>{props.address}</li>
                        <li><i className="fa fa-phone"></i>{props.phone}</li>
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
}



export default Card;