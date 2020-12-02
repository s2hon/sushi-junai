import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(7199);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function saveTimer() {
        localStorage.setItem("timer", count);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count - 1);
            setHour(Math.floor(count / 3600));
            setMinute(Math.floor(Math.floor((count) - (Math.floor(count / 3600) * 3600)) / 60));
            setSeconds(count % 60);
            saveTimer();
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