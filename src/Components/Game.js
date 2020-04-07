import React from 'react';
import Phrase from './Phrase';

export default function Game({ setLives }) {
    //lets have the phrases array get passed into the phrases component
    const phrases = [
        {
            index: 0,
            phrase: "my leg",
            hint: "a common phrase from a particular fish in a show about a character who lives in a pineapple"
        },
        {
            index: 1,
            phrase: "",
            hint: ""
        },
        {
            index: 2,
            phrase: "",
            hint: ""
        },
        {
            index: 3,
            phrase: "",
            hint: ""
        },
        {
            index: 4,
            phrase: "",
            hint: ""
        },
    ];

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

    const getKeyRowValue = e => {
        // can add data keys later for key press
        console.log(e.target.textContent);
    }
    
    return (
        <>
            <div id="banner" className="section">
                <h2 className="header">Phrase Hunter</h2>
            </div>

            <Phrase phrases={phrases}/>

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
                    {scoreboardListItems.map(item => (
                        <li key={item.src} className="tries"><img src={item.src} alt="game life"/> </li>
                    ))}    
                </ol>
            </div>
        </>
    )
}
