import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(7199);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        localStorage.setItem("timer", count);
        const previousTimer = localStorage.getItem("timer");
        if (previousTimer) {
            setCount(previousTimer);
        };
    }, [count])


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
        }, 1000)

        if (count < 0) {
            clearTimeout(timer);
        }
        else if (count < 0) {
            alert("All you can eat has ended!");
        }
    }, [count])

    return (
        <div>{hour}:{minute}:{seconds}</div>
    )
}

export default Counter;
