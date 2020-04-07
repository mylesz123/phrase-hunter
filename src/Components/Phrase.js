import React from 'react'

export default function Phrase({ phrases }) {

    return (
        <div id="phrase" className="section">
            <ul >
                {phrases.map(phrase => (
                    <li key={phrase.index}> 
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}
