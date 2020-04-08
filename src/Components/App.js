import React, { useState } from 'react';
import Header from './Header';
import Game from './Game';
import './../styles/index.css';

export default function App() {

  const phrases = [
    {
      index: 0,
      phrase: "my leg",
      hint: "a common phrase from a particular fish in a show about a character who lives in a pineapple"
    },
    {
      index: 1,
      phrase: "trust God",
      hint: "how do you honor God?"
    },
    {
      index: 2,
      phrase: "leggo my eggo",
      hint: "waffle"
    },
    {
      index: 3,
      phrase: "man in the mirror",
      hint: "some song by michael jackson"
    },
    {
      index: 4,
      phrase: "arigato mas",
      hint: "this is japanese"
    },
    {
      index: 4,
      phrase: "circle of life",
      hint: "main song from a disney movie about a .... king"
    },
  ];
  const [lives, setLives] = useState();
  // when lives = 5 then gameIsRunning = false and header should show game over message
  const [gameIsRunning, setGameIsRunning] = useState(false);

  const i = Math.floor(Math.random() * phrases.length);
  const [randomIndex, setRandomIndex] = useState(i);
  const randomPhrase = phrases[randomIndex].phrase.split("");

  const startGame = () => {
    const i = Math.floor(Math.random() * phrases.length);
    setLives(5)
    setRandomIndex(i)
    setGameIsRunning(true)
  }

  return (  
    <div className="main-container">
      {!gameIsRunning &&
        <div id="overlay" className="start">
          <Header lives={lives}/>
        <button id="btn__reset" onClick={startGame}>{ lives === -1 ? "Restart" : "Start Game" }</button>
        </div>
      }
      <Game 
        phrase={randomPhrase}
        lives={lives}
        setLives={setLives}
        setGameIsRunning={setGameIsRunning}
      />
    </div>
  );
}
