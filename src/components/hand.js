import React, { Component } from 'react';
import { Table as HtmlTable } from 'react-bootstrap';

export default class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player
    }
  }

  render() {
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
            {this.state.player.hand[0].is_visible ? (<td>{this.state.player.hand[0].numeric}{this.state.player.hand[0].mark}</td>) : (<td>??</td>) }
            {this.state.player.hand[1].is_visible ? (<td>{this.state.player.hand[1].numeric}{this.state.player.hand[1].mark}</td>) : (<td>??</td>) }
            <td>0</td>
            <td>0</td>
            <td>{this.state.player.chip}</td>
          </tr>
        </tbody>
      </HtmlTable>
    )
  }
}