import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import PokerTable from './components/poker_table.js';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1><Link to="/">my poker app</Link></h1>
        <Switch>
          <Route path='/' exact component={PokerTable} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
