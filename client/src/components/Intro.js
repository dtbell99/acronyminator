import React from 'react';

function Intro({ setView }) {

    return (
        <div className="intro">
            <h3>Welcome to Acronym-inator</h3>
            <p>The purpose of this game is to test your knowledge of company acronyms!</p>
            <button className="btn btn-primary" onClick={() => setView('game')}>PLAY</button>
        </div>
    )
}

export default Intro;