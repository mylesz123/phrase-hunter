import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';
import './../styles/index.css';

export default function App() {
  const [lives, setLives] = useState(0);
  return (     
    <div className="main-container">
      {/* <div id="overlay" className="start">
        <Header lives={lives}/>
        <button id="btn__reset">Start Game</button>
      </div> */}
      <Game 
        setLives={setLives}
      />
    </div>
  );
}
