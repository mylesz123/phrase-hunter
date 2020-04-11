import React, { useState, useEffect } from 'react';
import Phrase from './Phrase';
import { 
    KEY_ROW_1, 
    KEY_ROW_2, 
    KEY_ROW_3,
    SCOREBOARD_IMAGES,
} from './constants';

export default function Game({ 
    phrase, setLives, lives, 
    setGameIsRunning,
}) {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [matches, setMatches] = useState([]);
    const [finalAnswers, setFinalAnswers] = useState([]);
    const [youWon, setYouWon] = useState(false);

    const includesMatch = (array, value) => array.includes(value)
   
    useEffect(() => {
        includesMatch(phrase, selectedLetters) && setMatches(prev => [...prev, selectedLetters]);
        !includesMatch(phrase, selectedLetters) && removeLife();
        youWon && gameOver();
    }, [selectedLetters, youWon])

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
        setSelectedLetters([]);
        setMatches([]);
        setFinalAnswers([]);
        setYouWon(false);
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
                setYouWon={setYouWon}
                youWon={youWon}
                finalAnswers={finalAnswers}
                setFinalAnswers={setFinalAnswers}
            />

            <div id="qwerty" className="section">
                <div className="keyrow">
                    {KEY_ROW_1.map(key => (
                        <button key={key} className="key" onClick={getKeyRowValue} >{key}</button>
                    ))}
                </div>
                <div className="keyrow">
                    {KEY_ROW_2.map(key => (
                        <button key={key} className="key" onClick={getKeyRowValue} >{key}</button>
                    ))}
                </div>
                <div className="keyrow">
                    {KEY_ROW_3.map(key => (
                        <button key={key} className="key" onClick={getKeyRowValue} >{key}</button>
                    ))}
                </div>
            </div>

            <div id="scoreboard" className="section">
                <ol>
                    {SCOREBOARD_IMAGES.map((item, index) => (
                        lives === index &&
                        <li key={item.src} className="tries" ><img src={item.src} alt="game life"/> </li>
                    ))}    
                </ol>
            </div>
        </>
    )
}
