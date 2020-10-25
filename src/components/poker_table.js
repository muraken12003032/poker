import React, { Component } from 'react';
import { button } from 'react-bootstrap';
import Deck from '../classes/deck.js';
import Table from '../classes/table.js';
import PreFlop from '../components/preflop.js';
import Flop from '../components/flop.js';

export default class PokerTable extends Component {

  status = ['take_a_sheet', 'preflop', 'flop', 'turn', 'river'];
  Content = null

  constructor() {
    super();
    this.state = { table: new Table(new Deck()), status: this.status[0]};
    console.log(this.state);
  }

  switch_status(status) {
    switch (status) {
      case this.status[0]:
        return this.Content = (() => <PreFlop />);
      case this.status[1]:
        return this.Content = (() => <Flop />);
    }
  }

  
  deal() {
    console.log('カードを配るよ');
    this.setState({status: this.status[1]});
    console.log(this.state.status);
    this.switch_status(this.state.status);
    //console.log(this.state.deck[0]);
  }

  render() {
    return(
      <div>
        <p>this is poker table</p>
        {this.switch_status(this.state.status)}
        <button className="btn btn-primary" onClick={() => this.deal()}>カードを配る</button>
      </div>
    );
  }
}
