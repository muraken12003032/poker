import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Deck from '../classes/deck.js';

class PreFlop extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.location.state.table);
  }

  render() {
    return(
      <div><p>preflopだよ</p></div>
    )
  }
}

export default withRouter(PreFlop);
