import React from 'react';
import Terms from '../terms.json';

function Game({ setView }) {

    return (
        <div className="game">
            Playing {Terms.list.length}
        </div>
    )
}

export default Game;