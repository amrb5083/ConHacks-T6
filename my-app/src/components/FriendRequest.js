// src/components/FriendRequest.js
import React from 'react';

function FriendRequest({ username }) {
    return (
        <div>
            <p>{username} sent you a friend request!</p>
            <button>Accept</button>
            <button>Decline</button>
        </div>
    );
}

export default FriendRequest;
