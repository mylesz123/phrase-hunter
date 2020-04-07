import React from 'react'

export default function Header({ lives }) {

    return (
        <>
            {lives !== 5 
                ? <h2 className="title">Phrase Hunter</h2>
                : <h1 id="game-over-message"></h1>
            }
        </>
    )
}
