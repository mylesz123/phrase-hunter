import React from 'react'

export default function Header({ lives }) {

    return (
        <>
            {!lives && 
                <h2 className="title"> Phrase Hunter </h2>
            }
            {lives >= 0 &&
                <h2 className="title"> 🤩CONGRATS YOU WON 🥳 </h2>
            }
            {lives < 0 &&
                <h2 id="game-over-message"> GAME OVER!! </h2>
            }
        </>
    )
}
