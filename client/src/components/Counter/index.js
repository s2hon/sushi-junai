import React from 'react';
import Container from "../Container";
import moment from 'moment';

export default function EmptyCart () {
    if (moment().isAfter(localStorage.getItem("endtime"))) {
        return (
            <Container>
                <div className="float-right counter">
                    <div className="counter float-right" style={{ color:"red" }}>00:00:00</div>
                    </div>
            </Container>
        )
    }
    else {
        return (
            <Container>
                <div className="float-right counter">
                    <div className="counter float-right" style={{ color }}>{localStorage.getItem("endtime") ?  `${hour}:${minute}:${seconds}` : ''} </div>
                    </div>
            </Container>
        )
    }
}