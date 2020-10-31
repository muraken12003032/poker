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
    console.log(this.state.table);
  }
  start_game = () => {
    console.log('敵を1名追加するよ');
    this.state.table.join_enemies(1);
    console.log('カードを配るよ');
    console.log(this.state.table.players);
    this.state.table.deck.deal(this.state.table.players);
    this.props.history.push({ pathname: '/preflop', state: {table: this.state.table, deck: this.state.table.deck}});
  }

  render() {
    return(
      <div>
        <p>this is poker table</p>
        <button className="btn btn-primary" onClick={() => this.start_game()}>カードを配る</button>
      </div>
    );
  }
}

export default withRouter(PokerTable);
