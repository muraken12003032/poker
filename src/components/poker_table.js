import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

import Table from '../classes/table.js';
import Deck from '../classes/deck.js';

import Hand from '../components/hand.js'
import Field from '../components/field.js'

let status = ['preflop','flop','turn','river','showdown'];

class PokerTable extends Component {

  constructor() {
    super();
    this.state = {
      table: new Table(),
      status: 0
    };
    //敵プレイヤーを追加し、カードを配る
    this.state.table.join_enemies(1);
    this.state.table.deck.deal(this.state.table.players);
  }

  /*
    表示を切り替えるmethod
  */
  /*
  reset() {
    this.state.table.payoff(this.state.table.players[0],this.state.table.pot);
    this.state.table.deck = new Deck();
    this.setState({component: this.before_deal(), status: 0});
  }
  */

  next() {
    console.log(this.state.status)
    switch(this.state.status) {
      case 0:
        this.flop();
        break;
      // 1 と 2で同じ分岐
      case 1:
      case 2:
        this.turn_and_river();
        break;
      case 3:
        this.showdown();
        break;
      case 4:
        this.setState({component: this.showdown(), status: this.state.status + 1});
        break;
      case 5:
        this.setState({component: this.reset(), status: 0});
        break;
      default:
        this.setState({component: this.before_deal(), status: 0});
    }
  }


  /*
  ステータスによってcomponentを切り替えていくmethod
  */
  flop() {
    //1枚捨てて3枚表示する
    this.state.table.garbage.push(this.state.table.deck.pull(false));
    for(let i = 0; i<3; i++){
      this.state.table.field.push(this.state.table.deck.pull(true));
    }

    //コンポーネントを再表示
    this.setState({table: this.state.table, status: this.state.status + 1});
  }

  turn_and_river() {
    //1枚捨てて1枚表示
    this.state.table.garbage.push(this.state.table.deck.pull(false));
    this.state.table.field.push(this.state.table.deck.pull(true));

    //コンポーネントを再表示
    this.setState({table: this.state.table, status: this.state.status + 1})
  }

  showdown() {
    this.state.table.players.forEach(player => {
      //敵playerのカードは見えないので、見せる
      if(!player.me){
        player.hand.forEach(card => card.is_visible = true);
      }
    });
    //コンポーネントを再表示
    this.setState({table: this.state.table, status: this.state.status + 1})
  }

  render() {
    return(
      <div className="container">
        <h3>current_status: {status[this.state.status]}</h3>
        <div className="row">
          <div className="col-lg-6">
            <p>enemy hand</p>
            <Hand player={this.state.table.players[1]} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <p>場</p>
            <Field table={this.state.table} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <p>my hand</p>
            <Hand player={this.state.table.players[0]} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Button className="btn btn-primary" onClick={() => this.next()}>call</Button>
            <Button className="btn btn-default" onClick={() => this.next()}>bet</Button>
            <Button className="btn btn-danger" onClick={() => this.reset()}>fold</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PokerTable);