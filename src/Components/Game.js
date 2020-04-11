import React, { useState, useEffect } from 'react';
import Phrase from './Phrase';

export default function Game({ 
    phrase, setLives, lives, 
    setGameIsRunning, setYouWon 
}) {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [matches, setMatches] = useState([]);
    const scoreboardListItems = [
        { src: "images/lastLife.png"},
        { src: "images/fourthLife.png"},
        { src: "images/thirdLife.png"},
        { src: "images/secondLife.png"},
        { src: "images/firstLife.png"},
    ]

    const keyrow1 = [
        "q","w","e","r","t","y","u","i","o","p",
    ]

    const keyrow2 = [
        "a","s","d","f","g","h","j","k","l",
    ]

    const keyrow3 = [
        "z","x","c","v","b","n","m",
    ]

    const includesMatch = (array, value) => array.includes(value)
   
    useEffect(() => {
        includesMatch(phrase, selectedLetters) && setMatches(prev => [...prev, selectedLetters]);
        !includesMatch(phrase, selectedLetters) && removeLife();
    }, [selectedLetters])

    const getKeyRowValue = e => {
        // can add data keys later for key press
        setSelectedLetters(e.target.textContent);
    }

    const removeLife = () => {
        setLives(prev => prev - 1)
        
        if (lives === 0) {
            gameOver();
        }
    }

    const gameOver = () => {
        setGameIsRunning(false);
    }

    const setWinner = () => {
        setYouWon(true);
        setGameIsRunning(false);
    }
    
    return (
        <>
            <div id="banner" className="section">
                <h2 className="header">Phrase Hunter</h2>
            </div>

            <div className="section">
                <span className={lives === 0 ? "last-life" : "life"}> Lives: {lives} </span>
            </div>

            <Phrase 
                phrase={phrase}
                matches={matches}
                setWinner={setWinner}
            />

            <div id="qwerty" className="section">
                <div className="keyrow">
                    {keyrow1.map(key => (
                        <button key={key} className="key" onClick={getKeyRowValue} >{key}</button>
                    ))}
                </div>
                <div className="keyrow">
                    {keyrow2.map(key => (
                        <button key={key} className="key" onClick={getKeyRowValue} >{key}</button>
                    ))}
                </div>
                <div className="keyrow">
                    {keyrow3.map(key => (
                        <button key={key} className="key" onClick={getKeyRowValue} >{key}</button>
                    ))}
                </div>
            </div>

            <div id="scoreboard" className="section">
                <ol>
                    {scoreboardListItems.map((item, index) => (
                        lives === index &&
                        <li key={item.src} className="tries" ><img src={item.src} alt="game life"/> </li>
                    ))}    
                </ol>
            </div>
        </>
    )
}
