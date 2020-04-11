import React, { useRef, useEffect } from 'react'

export default function Phrase({ 
    phrase, matches, setYouWon,
    youWon, finalAnswers, setFinalAnswers,
}) {  
    const includesMatch = (letter) => matches.includes(letter)

    let ref = useRef()

    useEffect(() => {
        let listItems = ref.current.children
  
        for (let index = 0; index < listItems.length; index++) {
            const element = listItems[index];
            if (element.className === "letter show" ) {
                if (!finalAnswers.includes(element.innerHTML)) {
                    setFinalAnswers(prev => [...prev, element.innerHTML]);
                }
            }
        }

        let finalTest = phrase.filter(phrase => phrase !== " ")
        if (finalAnswers.length === finalTest.length) setYouWon(true);

    }, [ref, matches, finalAnswers, youWon])

    return (
        <div id="phrase" className="section">
            <ul ref={ref}>
                {phrase.map((letter, index) => (
                    letter !== " "
                        ? 
                            <li key={letter + index} 
                                className={`letter ${includesMatch(letter) ? "show" : "hide"}`}
                                > 
                                {letter} 
                            </li>
                        : <li key={letter + index} className="space" />
                ))}
            </ul>
        </div>
    )
}
