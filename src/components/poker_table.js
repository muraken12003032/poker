import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Table as HtmlTable } from 'react-bootstrap';
import PreFlop from '../components/preflop.js';

import Deck from '../classes/deck.js';
import Table from '../classes/table.js';

class PokerTable extends Component {

  constructor() {
    super();
    this.state = {table: new Table(), component: this.before_deal()};
    console.log(this.state.table);
  }

  before_deal(){
    return(
      <div>
        <p>this is poker table</p>
        <Button className="btn btn-primary" onClick={() => this.start_game()}>カードを配る</Button>
      </div>
    );
  }

  hand(player) {
    return(
      <HtmlTable bordered hover>
        <thead>
          <tr>
            <th>card1</th>
            <th>card2</th>
            <th>blind</th>
            <th>button</th>
            <th>chip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{player.hand[0].numeric}{player.hand[0].mark}</td>
            <td>{player.hand[1].numeric}{player.hand[1].mark}</td>
            <td>0</td>
            <td>0</td>
            <td>{player.chip}</td>
          </tr>
        </tbody>
      </HtmlTable>
    )
  }

  field() {
    return(
      <div>
        <p>pot: {this.state.table.pot}</p>
        <HtmlTable bordered hover>
          <tbody>
            <tr>
              <td>{this.state.table.field[0]}</td>
              <td>{this.state.table.field[1]}</td>
              <td>{this.state.table.field[2]}</td>
              <td>{this.state.table.field[3]}</td>
              <td>{this.state.table.field[4]}</td>
            </tr>
          </tbody>
        </HtmlTable>
      </div>
    )
  }

  table(table) {
    return(
      <div className="container">
        <h3>プリフロップだよ</h3>
        <div className="row">
          <div className="col-lg-6">
            <p>enemy hand</p>
            {this.hand(this.state.table.players[1])}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <p>場</p>
            {this.field()}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <p>my hand</p>
            {this.hand(this.state.table.players[0])}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Button className="btn btn-primary">call</Button>
            <Button className="btn btn-default">bet</Button>
            <Button className="btn btn-danger">fold</Button>
          </div>
        </div>
      </div>
    )
  }

  start_game = () => {
    console.log('敵を1名追加するよ');
    this.state.table.join_enemies(1);
    console.log('カードを配るよ');
    console.log(this.state.table.players);
    this.state.table.deck.deal(this.state.table.players);
    this.setState({component: this.table()});
  }

  render() {
    return(this.state.component)
  }
}

export default withRouter(PokerTable);
