import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { button } from 'react-bootstrap';
import PreFlop from '../components/preflop.js';

import Deck from '../classes/deck.js';
import Table from '../classes/table.js';

class PokerTable extends Component {

  constructor() {
    super();
    this.state = {table: new Table()};
  }
  deal = () => {
    console.log('カードを配るよ');
    this.state.table.deck.deal();
    this.props.history.push({ pathname: '/preflop', state: {table: this.state.table, deck: this.state.table.deck}});
  }

  render() {
    return(
      <div>
        <p>this is poker table</p>
        <button className="btn btn-primary" onClick={() => this.deal()}>カードを配る</button>
      </div>
    );
  }
}

export default withRouter(PokerTable);
