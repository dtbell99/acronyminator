import React, { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import Game from './components/Game';
import Score from './components/Score';


function App() {

  const [view, setView] = useState('intro');

  return (
    <div className="App">
      {view === 'intro' && <Intro setView={setView} />}
      {view === 'game' && <Game setView={setView} />}
      {view === 'score' && <Score setView={setView} />}
    </div>
  );
}

export default App;
