import React, { useState, useRef, useEffect } from 'react'

export default function Phrase({ phrase, matches, setWinner }) {  
    const includesMatch = (letter) => matches.includes(letter)
    const [values, setValues] = useState([])

    let ref = useRef()

    useEffect(() => {
        let listItems = ref.current.children
  
        for (let index = 0; index < listItems.length; index++) {
            const element = listItems[index];
            if (element.className === "letter show" ) {
                if (!values.includes(element.innerHTML)) {
                    setValues(prev => [...prev, element.innerHTML]);
                }
            }
        }

        let finalPass = phrase.filter(phrase => phrase !== " ")
        if (values.length === finalPass.length) setWinner();

    }, [ref, matches, values])

    return (
        <div id="phrase" className="section">
            <ul ref={ref}>
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
