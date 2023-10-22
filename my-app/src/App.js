import React from 'react';
import './App.css';
import Profile from './components/Profile.js';
import SessionControls from './components/SessionControls';
import PointsOverview from './components/PointsOverview';
import PointsSummary from './components/PointsSummary';
import Leaderboard from './components/Leaderboard';
import ProgressSummary from './components/ProgressSummary';
import FriendRequest from './components/FriendRequest';
import FriendsList from './components/FriendsList';

function App() {

    // Simulated friends data
    const friends = ['Alice', 'Bob', 'Charlie'];
    const leaderboardUsers = [
        { username: 'JohnDoe', points: 150 },
        { username: 'JaneDoe', points: 120 },
        { username: 'Eve', points: 90 },
    ];

  return (
      <div className="App">
        <h1>Study Incentive App</h1>
        {/* Add your components here */}

          <Profile />
          <SessionControls />
          <PointsOverview />
          <PointsSummary />
          <FriendsList friends={friends} />
          <Leaderboard users={leaderboardUsers} />
          <ProgressSummary />
          <FriendRequest username="JohnDoe" />

      </div>
  );
}

export default App;
