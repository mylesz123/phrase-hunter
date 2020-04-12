import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';
import { PHRASES } from './constants'
import './../styles/index.css';

export default function App() {

  const [lives, setLives] = useState();
  const [gameIsRunning, setGameIsRunning] = useState(false);

  const i = Math.floor(Math.random() * PHRASES.length);
  const [randomIndex, setRandomIndex] = useState(i);
  const randomPhrase = PHRASES[randomIndex].phrase.split("");

  const startGame = () => {
    const i = Math.floor(Math.random() * PHRASES.length);
    setLives(5)
    setRandomIndex(i)
    setGameIsRunning(true)
  }

  const className = !lives 
    ? "start" 
    : lives > 0 ? "win" : "lose"

  return (  
    <div className="main-container">
      {!gameIsRunning &&
        <div id="overlay" className={className} >
          <Header lives={lives}/>
          <button id="btn__reset" onClick={startGame}>{!lives ? "Start Game" : "Play Again" }</button>
        </div>
      }
      <Game 
        phrase={randomPhrase}
        lives={lives}
        setLives={setLives}
        setGameIsRunning={setGameIsRunning}
        gameIsRunning={gameIsRunning}
      />
    </div>
  );
}
