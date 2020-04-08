import React from 'react'

export default function Header({ lives }) {

    return (
        <>
            {lives === -1 
                ? <h2 id="game-over-message"> GAME OVER!! </h2>
                : <h2 className="title">Phrase Hunter</h2> 
            }
        </>
    )
}
