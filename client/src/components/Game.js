import React, { useState, useEffect } from 'react';
import Terms from '../terms.json';

function Game({ setView }) {

    const [counter, setCounter] = useState(5);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => { setCounter(counter - 1); }, 1000);
        }
    }, [counter]);

    return (
        <div className="game">
            Score: {score}<br />
            Time Remaining:&nbsp;{counter}
        </div>
    )
}

export default Game;