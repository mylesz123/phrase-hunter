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
    
    return (
        <>
            <div id="banner" className="section">
                <h2 className="header">Phrase Hunter</h2>
            </div>

            <Phrase phrases={phrases}/>

            <div id="qwerty" className="section">
                <div className="keyrow">
                    <button className="key">q</button>
                    <button className="key">w</button>
                    <button className="key">e</button>
                    <button className="key">r</button>
                    <button className="key">t</button>
                    <button className="key">y</button>
                    <button className="key">u</button>
                    <button className="key">i</button>
                    <button className="key">o</button>
                    <button className="key">p</button>
                </div>

                <div className="keyrow">
                    <button className="key">a</button>
                    <button className="key">s</button>
                    <button className="key">d</button>
                    <button className="key">f</button>
                    <button className="key">g</button>
                    <button className="key">h</button>
                    <button className="key">j</button>
                    <button className="key">k</button>
                    <button className="key">l</button>
                </div>

                <div className="keyrow">
                    <button className="key">z</button>
                    <button className="key">x</button>
                    <button className="key">c</button>
                    <button className="key">v</button>
                    <button className="key">b</button>
                    <button className="key">n</button>
                    <button className="key">m</button>
                </div>
            </div>

            <div id="scoreboard" className="section">
                <ol>
                    <li className="tries"><img src="images/firstLife.png" height="35px" widght="30px" /></li>
                    <li className="tries"><img src="images/secondLife.png" height="35px" widght="30px" /></li>
                    <li className="tries"><img src="images/thirdLife.png" height="35px" widght="30px" /></li>
                    <li className="tries"><img src="images/fourthLife.png" height="35px" widght="30px" /></li>
                    <li className="tries"><img src="images/lastLife.png" height="35px" widght="30px" /></li>
                </ol>
            </div>
        </>
    )
}
