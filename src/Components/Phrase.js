import React from 'react'

export default function Phrase({ phrase, matches }) {  
    const includesMatch = (letter) => matches.includes(letter)
    
    return (
        <div id="phrase" className="section">
            <ul>
                {phrase.map((letter, index) => (
                    letter !== " "
                        ? (
                            <li key={letter + index} 
                                className={`letter ${includesMatch(letter) ? "show" : "hide"}`} 
                                > 
                                {letter} 
                            </li>
                        )
                        : (<li key={letter + index} className="space" />)
                ))}
            </ul>
        </div>
    )
}
