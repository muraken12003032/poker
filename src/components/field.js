import React, { Component } from 'react';
import { Table as HtmlTable } from 'react-bootstrap';

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.props.table
    }
  }

  render() {
    return(
      <div>
        <p>pot: {this.state.table.pot}</p>
        <HtmlTable bordered hover>
          <tbody>
            <tr>
              {this.state.table.field[0] === undefined ? (<td>空</td>) : (<td>{this.state.table.field[0].numeric}{this.state.table.field[0].mark}</td>)}
              {this.state.table.field[1] === undefined ? (<td>空</td>) : (<td>{this.state.table.field[1].numeric}{this.state.table.field[1].mark}</td>)}
              {this.state.table.field[2] === undefined ? (<td>空</td>) : (<td>{this.state.table.field[2].numeric}{this.state.table.field[2].mark}</td>)}
              {this.state.table.field[3] === undefined ? (<td>空</td>) : (<td>{this.state.table.field[3].numeric}{this.state.table.field[3].mark}</td>)}
              {this.state.table.field[4] === undefined ? (<td>空</td>) : (<td>{this.state.table.field[4].numeric}{this.state.table.field[4].mark}</td>)}
            </tr>
          </tbody>
        </HtmlTable>
      </div>
    )
  }
}