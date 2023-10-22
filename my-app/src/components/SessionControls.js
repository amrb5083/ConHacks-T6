// src/components/SessionControls.js
import React, { useState, useEffect } from 'react';
import BreakTimer from './BreakTimer';



const calculatePoints = (duration) => {
    if (duration <= 30) {
        return 50;
    } else if (duration <= 60) {
        return 125;
    } else if (duration <= 120) {
        return 225;
    } else if (duration <= 180) {
        return 345;
    } else {
        // Additional 200 points for each hour after three hours
        const additionalHours = Math.floor((duration - 180) / 60);
        return 345 + additionalHours * 200;
    }
};

function SessionControls() {
    const [sessionTimer, setSessionTimer] = useState(0);
    const [sessionStarted, setSessionStarted] = useState(false);
    const [breakActive, setBreakActive] = useState(false);
    const [sessionDuration, setSessionDuration] = useState(180); // Default 3 hours
    const [breakType, setBreakType] = useState('auto'); // Default to auto
    const [numCustomBreaks, setNumCustomBreaks] = useState(2);
    const [customBreaks, setCustomBreaks] = useState([]);
    const [points, setPoints] = useState(0);

    const handleStartSession = () => {
        setSessionStarted(true);
        // Add logic to start session (e.g., start monitoring face and screen)
    };

    const handleSetBreaks = () => {
        setBreakActive(true);

        if (breakType === 'auto') {
            // Simulate logic for auto breaks (e.g., every 20 minutes)
            const autoBreakInterval = setInterval(() => {
                // Trigger break
                setBreakActive(false);
                // Simulate a break for 5 minutes
                setTimeout(() => {
                    // Break is over
                    clearInterval(autoBreakInterval);
                    // Add logic for when the break is over
                }, 5 * 60 * 1000);
            }, 20 * 60 * 1000);
        } else if (breakType === 'custom') {
            // Add logic for custom breaks
            const customBreakInterval = setInterval(() => {
                if (customBreaks.length > 0) {
                    const currentBreak = customBreaks.shift();
                    setBreakActive(true);
                    // Add logic for when the break is over
                    setTimeout(() => {
                        setBreakActive(false);
                    }, currentBreak.duration * 60 * 1000);
                } else {
                    // All custom breaks are done
                    clearInterval(customBreakInterval);
                }
            }, 1000);
        }
    };

    // Update handleEndSession function in SessionControls.js
    const handleEndSession = () => {
        setSessionStarted(false);
        setBreakActive(false);
        setSessionTimer(0); // Reset the session timer

        // Calculate points based on session duration
        const sessionPoints = calculatePoints(sessionDuration);

        // Simulate updating points (replace with actual backend integration)
        setPoints((prevPoints) => prevPoints + sessionPoints);

        // Add logic to end session (e.g., stop monitoring)
    };

    const handleBreakEnd = () => {
        setBreakActive(false);
        // Add logic for when the break is over
    };

    // Update the useEffect hook in SessionControls.js
    useEffect(() => {
        let interval;

        if (sessionStarted) {
            // Calculate points every minute
            interval = setInterval(() => {
                // Increment points every minute
                setPoints((prevPoints) => prevPoints + calculatePoints(sessionDuration) / 180);
            }, 60 * 1000);

            // Update session timer every second
            const timerInterval = setInterval(() => {
                setSessionTimer((prevTimer) => prevTimer + 1);
            }, 1000);

            return () => {
                clearInterval(interval);
                clearInterval(timerInterval);
            };
        }

        return () => clearInterval(interval);
    }, [sessionStarted, sessionDuration]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <div>
                <label>
                    Session Duration (minutes):
                    <input
                        type="number"
                        value={sessionDuration}
                        onChange={(e) => setSessionDuration(parseInt(e.target.value, 10))}
                        disabled={sessionStarted}
                    />
                </label>
                <br />
                <label>
                    Break Type:
                    <select
                        value={breakType}
                        onChange={(e) => setBreakType(e.target.value)}
                        disabled={sessionStarted}
                    >
                        <option value="auto">Auto</option>
                        <option value="custom">Custom</option>
                    </select>
                </label>
                {breakType === 'custom' && (
                    <div>
                        <label>
                            Number of Custom Breaks:
                            <input
                                type="number"
                                value={numCustomBreaks}
                                onChange={(e) => setNumCustomBreaks(parseInt(e.target.value, 10))}
                                disabled={sessionStarted}
                            />
                        </label>
                        <br />
                        {[...Array(numCustomBreaks)].map((_, index) => (
                            <div key={index}>
                                <label>
                                    Break-{index + 1}:
                                    <br />
                                    <label>
                                        Break after (minutes):
                                        <input
                                            type="number"
                                            value={customBreaks[index]?.after || ''}
                                            onChange={(e) =>
                                                setCustomBreaks((prevBreaks) =>
                                                    prevBreaks.map((breakItem, i) =>
                                                        i === index ? { ...breakItem, after: parseInt(e.target.value, 10) } : breakItem
                                                    )
                                                )
                                            }
                                            disabled={sessionStarted}
                                        />
                                    </label>
                                    <br />
                                    <label>
                                        Break for (minutes):
                                        <input
                                            type="number"
                                            value={customBreaks[index]?.duration || ''}
                                            onChange={(e) =>
                                                setCustomBreaks((prevBreaks) =>
                                                    prevBreaks.map((breakItem, i) =>
                                                        i === index ? { ...breakItem, duration: parseInt(e.target.value, 10) } : breakItem
                                                    )
                                                )
                                            }
                                            disabled={sessionStarted}
                                        />
                                    </label>
                                    <br />
                                </label>
                            </div>
                        ))}
                    </div>
                )}
                <br />
                <button onClick={handleStartSession} disabled={sessionStarted}>
                    Start Session
                </button>
                <button onClick={handleSetBreaks} disabled={!sessionStarted || breakActive}>
                    Set Breaks
                </button>
                <button onClick={handleEndSession} disabled={!sessionStarted && !breakActive}>
                    End Session
                </button>
                {breakActive && <BreakTimer onBreakEnd={handleBreakEnd} />}
                <br />
                <div>
                    <h2>Session Timer</h2>
                    <p>Remaining Time: {formatTime(sessionDuration * 60 - sessionTimer)}</p>
                </div>
                <br />

                <div>
                    <h2>Live Points Meter</h2>
                    <p>Points: {Math.round(points)}</p>
                </div>
            </div>        </div>
    );
}

export default SessionControls;

