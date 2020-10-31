import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Table, Button } from 'react-bootstrap';
import Deck from '../classes/deck.js';

class PreFlop extends Component {

  constructor(props) {
    super(props);
    this.state = {table: this.props.location.state.table};
  }

  hand(player) {
    return(
      <Table bordered hover>
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
      </Table>
    )
  }

  field() {
    return(
      <Table bordered hover>
       <tbody>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
       </tbody>
      </Table>
    )
  }

  render() {
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
}

export default withRouter(PreFlop);
