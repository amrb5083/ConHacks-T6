// src/components/BreakTimer.js
import React, { useState, useEffect } from 'react';

function BreakTimer({ onBreakEnd }) {
    const [seconds, setSeconds] = useState(300); // 5 minutes break

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        if (seconds === 0) {
            clearInterval(timer);
            onBreakEnd(); // Notify parent component that the break is over
        }

        return () => clearInterval(timer);
    }, [seconds, onBreakEnd]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <h2>Break Timer</h2>
            <p>Time Remaining: {formatTime(seconds)}</p>
        </div>
    );
}

export default BreakTimer;
