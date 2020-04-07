import React from 'react'

export default function Phrase({ phrases }) {

    return (
        <div id="phrase" className="section">
            {phrases.map(phrase => (
                <ul key={phrase}>
                    <li />
                </ul>
            ))}
        </div>
    )
}
