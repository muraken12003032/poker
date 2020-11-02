import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button, Table as HtmlTable } from 'react-bootstrap';

import Table from '../classes/table.js';
import Deck from '../classes/deck.js';

import Hand from '../components/hand.js'
import Field from '../components/field.js'

class PokerTable extends Component {

  constructor() {
    super();
    this.state = {
      table: new Table(),
      component: this.before_deal(),
      //status: 0:before_deal, 1:preflop, 2:flop, 3:turn, 4:river, 5:showdown
      status: 0
    };
    console.log(this.state.table);
  }

  /*
    表示を切り替えるmethod
  */
  reset() {
    this.state.table.payoff(this.state.table.players[0],this.state.table.pot);
    this.state.table.deck = new Deck();
    this.setState({component: this.before_deal(), status: 0});
  }

  next() {
    console.log(this.state.status)
    switch(this.state.status) {
      case 0:
        this.setState({component: this.preflop(), status: this.state.status + 1});
        break;
      case 1:
        this.setState({component: this.flop(), status: this.state.status + 1});
        break;
      case 2:
        this.setState({component: this.turn(), status: this.state.status + 1});
        break;
      case 3:
        this.setState({component: this.river(), status: this.state.status + 1});
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

  before_deal(){
    return(
      <div>
        <p>this is poker table</p>
        <Button className="btn btn-primary" onClick={() => this.setState({component: this.preflop(), status: 1})}>カードを配る</Button>
      </div>
    );
  }

  /*
  ステータスによってcomponentを切り替えていくmethod
  */
  preflop() {
    this.state.table.join_enemies(1);
    this.state.table.deck.deal(this.state.table.players);
    return(this.table_component('preflop'));
  }

  flop() {
    //1枚捨てて
    this.state.table.garbage.push(this.state.table.deck.pull(false));

    //3枚表示する
    for(let i = 0; i<3; i++){
      this.state.table.field.push(this.state.table.deck.pull(true));
    }
    //flopのコンポーネントを表示
    return(this.table_component('flop'));
  }

  turn() {
    //1枚捨てて
    this.state.table.garbage.push(this.state.table.deck.pull(false));

    //1枚表示する
    this.state.table.field.push(this.state.table.deck.pull(true));

    //flopのコンポーネントを表示
    return(this.table_component('turn'));
  }

  river() {
    //1枚捨てて
    this.state.table.garbage.push(this.state.table.deck.pull(false));

    //1枚表示する
    this.state.table.field.push(this.state.table.deck.pull(true));

    //flopのコンポーネントを表示
    return(this.table_component('river'));
  }

  showdown() {
    this.state.table.players.forEach(player => {
      //敵playerのカードは見えないので、見せる
      if(!player.me){
        player.hand.forEach(card => card.is_visible = true);
      }
    });
    //flopのコンポーネントを表示
    return(this.table_component('showdown'));
  }

  table_component(status){
    return(
      <div className="container">
        <h3>current_status: {status}</h3>
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


  render() {
    return(this.state.component)
  }
}

export default withRouter(PokerTable);