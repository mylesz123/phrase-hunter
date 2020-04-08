import React, { useState, useEffect } from 'react';
import Phrase from './Phrase';

export default function Game({ phrase, setLives, lives, setGameIsRunning }) {
    console.log("game rendered")

    const [selectedLetter, setSelectedLetter] = useState('');

    const scoreboardListItems = [
        { src: "images/firstLife.png"},
        { src: "images/secondLife.png"},
        { src: "images/thirdLife.png"},
        { src: "images/fourthLife.png"},
        { src: "images/lastLife.png"},
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

    useEffect(() => {
        // this works, just need to stop it from re-rendering when you get it wrong
        const match = phrase.includes(selectedLetter);
        !match && removeLife();
    }, [selectedLetter])

    const getKeyRowValue = e => {
        // can add data keys later for key press
        setSelectedLetter(e.target.textContent);
    }

    //todo, when life is lost, remove a heart from the board,
    const removeLife = () => {
        setLives(prev => prev - 1)
        
        if (lives === 1) {
            gameOver();
        }
    }

    const gameOver = () => {
        setGameIsRunning(false);
    }
    
    return (
        <>
            <button onClick={removeLife} />
            <div id="banner" className="section">
                <h2 className="header">Phrase Hunter</h2>
            </div>

            <Phrase 
                phrase={phrase}
                selectedLetter={selectedLetter}
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
                    {/* todo, when life is lost remove img */}
                    {scoreboardListItems.map(item => (
                        <li key={item.src} className="tries"><img src={item.src} alt="game life"/> </li>
                    ))}    
                </ol>
            </div>
        </>
    )
}
