// src/components/Leaderboard.js
import React from 'react';

function Leaderboard({ users }) {
    return (
        <div>
            <h2>Leaderboard</h2>
            <ol>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.username} - Points: {user.points}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Leaderboard;
