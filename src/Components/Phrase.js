import React from 'react'

export default function Phrase({ phrase }) {

    return (
        <div id="phrase" className="section">
            {phrase.map(letter => (
                <ul key={letter}>
                    {letter !== " "
                        ? (<li className={"hide letter"}> {letter} </li>)
                        : (<li className="space"></li>)}
                </ul>
            ))}
        </div>
    )
}
