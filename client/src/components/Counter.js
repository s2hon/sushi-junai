import React, { useState, useEffect } from "react";
import Container from "./Container"
import moment from 'moment';

function Counter() {
    const endTime = localStorage.getItem("endtime");
    const currentTime = moment().format("MMMM Do YYYY HH:mm:ss");

    function getHour(count){
        return Math.floor(count / 3600)
    }
    function getMinute(count){
        return Math.floor(Math.floor((count) - (Math.floor(count / 3600) * 3600)) / 60);
    }
    function getSecond(count){
        return count % 60;
    }

    let difference = moment.utc(moment(endTime,"MMMM Do YYYY HH:mm:ss").diff(moment(currentTime,"MMMM Do YYYY HH:mm:ss"))).format("HH:mm:ss")
    difference = moment.duration(difference).asSeconds()

    const [count, setCount] = useState(difference);
    const [hour, setHour] = useState(getHour(count));
    const [minute, setMinute] = useState(getMinute(count));
    const [seconds, setSeconds] = useState(getSecond(count));
    const [color, setColor] = useState('black');

    useEffect(() => {
        const timer = setTimeout(() => {
                setCount(count - 1);
                setHour(getHour(count));
                let minutes = getMinute(count)
                if (minutes < 10) {
                    minutes = minutes.toString().padStart(2, "0");
                }
                setMinute(minutes);
    
                let secondsRemaining = getSecond(count);
                if (secondsRemaining < 10) {
                    secondsRemaining = secondsRemaining.toString().padStart(2, "0");
                }
                setSeconds(secondsRemaining);
        }, 1000)

        if (count < 0) {
            clearTimeout(timer);
            setColor("red");
        }

        return function cleanup() {
            clearTimeout(timer)
        }
    }, [count])

    if (difference > 6000) {
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
                    <div className="counter float-right" style={{ color }}>{`${hour}:${minute}:${seconds}`} </div>
                    </div>
            </Container>
        )
    }
}

export default Counter;
