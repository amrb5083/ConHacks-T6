// src/components/ProgressSummary.js
import React from 'react';

function ProgressSummary() {
    // Simulated data
    const timeSpent = "2 hours";
    const topicsCovered = ["Math", "Science"];
    const difficultyLevel = "Intermediate";

    return (
        <div>
            <h2>Progress Summary</h2>
            <p>Time Spent: {timeSpent}</p>
            <p>Topics Covered: {topicsCovered.join(", ")}</p>
            <p>Difficulty Level: {difficultyLevel}</p>
        </div>
    );
}

export default ProgressSummary;
