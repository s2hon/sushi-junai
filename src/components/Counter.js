import React, { useState } from "react";


function Counter() {
    const [count, setCount] = useState(2 * 60 * 60);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [seconds, setSeconds] = useState(0);

    
        setTimeout(() => {
            setCount(count - 1)
            setHour(Math.floor(count/ 7200))
            setMinute(Math.floor(count/ 60000))
            setSeconds(Math.floor(minute / 1000))
        }, 1000)
        if (count===0){
            clearTimeout();
        }
    
    return (
        <div>Time:{count}
            </div>
    )
}

export default Counter;