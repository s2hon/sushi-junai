import React from 'react';
import Container from "../Container"

export default function EmptyCart () {
    return (
        <Container>
            <div className="float-right counter">
                <div className="counter float-right" style={{ color }}>{localStorage.hasOwnProperty("endtime") ?  `${hour}:${minute}:${seconds}` : ''} </div>
                </div>
        </Container>
    )
}