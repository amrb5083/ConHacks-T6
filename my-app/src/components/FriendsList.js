// src/components/FriendsList.js
import React from 'react';

function FriendsList({ friends }) {
    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
        </div>
    );
}

export default FriendsList;
