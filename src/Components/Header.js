import React from 'react'

export default function Header({ lives }) {

    return (
        <>
            {!lives 
                ? <h2 className="title"> Phrase Hunter </h2>
                : lives > 0 
                ? (
                    <h2 className="title">
                        <span role="img" aria-label="">🤩 </span>
                        CONGRATS YOU WON
                        <span role="img" aria-label=""> 🥳</span>
                    </h2>
                )
                : (
                    <h2 id="game-over-message"> 
                        GAME OVER  
                        <span role="img" aria-label=""> ❌</span>
                    </h2>
                )
            }
        </>
    )
}
