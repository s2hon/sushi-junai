import React from 'react';
import Container from "../Container";
import moment from 'moment';

export default function EmptyCart () {
    return (
        <Container>
            <div className="float-right counter">
                <div className="counter float-right" style={{ color }}>{moment().isAfter(localStorage.getItem("endtime")) ?  `${hour}:${minute}:${seconds}` : ''} </div>
                </div>
        </Container>
    )
}