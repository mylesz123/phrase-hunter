import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';
import './../styles/index.css';

export default function App() {
  const [lives, setLives] = useState(0);
  // when lives = 5 then gameIsRunning = false and header should show game over message
  const [gameIsRunning, setGameIsRunning] = useState(false);

  const startGame = () => {
    setGameIsRunning(true)
  }

  return (     
    <div className="main-container">
      {!gameIsRunning &&
        <div id="overlay" className="start">
          <Header lives={lives}/>
          <button id="btn__reset" onClick={startGame}>Start Game</button>
        </div>
      }
      <Game 
        setLives={setLives}
      />
    </div>
  );
}
