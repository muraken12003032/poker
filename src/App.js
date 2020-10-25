import React from 'react';
import './App.css';
import PokerTable from './components/poker_table.js';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>my poker app</h1>
      <PokerTable />
    </div>
  );
}

export default App;
