import React, { useState, useEffect } from "react";

function Counter() {
    function getHour(count){
        return Math.floor(count / 3600)
    }
    function getMinute(count){
        return Math.floor(Math.floor((count) - (Math.floor(count / 3600) * 3600)) / 60);
    }
    function getSecond(count){
        return count % 60;
    }
    const [count, setCount] = useState(localStorage.getItem("timer"));
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
                if (localStorage.getItem("timer")) {
                    localStorage.setItem("timer", count);
                }
        }, 1000)

        if (count < 0) {
            clearTimeout(timer);
            setColor("red");
        }

        return function cleanup() {
            clearTimeout(timer)
        }
    }, [count])

    return (
    <div className="counter" style={{ color }}>{hour}:{minute}:{seconds} </div>
    )
    
}

export default Counter;
