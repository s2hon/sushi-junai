import React, { useState, useEffect } from "react";
import moment from 'moment';

function Counter() {
    const [count, setCount] = useState(localStorage.getItem("timer"));
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count - 1);
            setHour(Math.floor(count / 3600));
            let minutes = Math.floor(Math.floor((count) - (Math.floor(count / 3600) * 3600)) / 60)
            if (minutes < 10){
                minutes = minutes.toString().padStart(2, "0");
            }
            setMinute(minutes);

            let secondsRemaining = count % 60;
            if (secondsRemaining < 10) {
                secondsRemaining = secondsRemaining.toString().padStart(2, "0");
            }
            setSeconds(secondsRemaining);
            if (localStorage.getItem("timer")) {
                localStorage.setItem("timer", count);
            }
            else if (localStorage.getItem("date") !== moment().format('MMMM Do YYYY')) {
                localStorage.setItem("timer", count);
            }
        }, 1000)

        if (count < 0) {
            clearTimeout(timer);
        }

        return function cleanup(){
            clearTimeout(timer)
        }
    }, [count])
    return (
        <div className ="counter">{hour}:{minute}:{seconds} </div>
    )
}

export default Counter;
