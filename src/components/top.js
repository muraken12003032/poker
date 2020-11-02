import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';

class Top extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <p>this is poker table</p>
        <Button className="btn btn-primary" onClick={() => this.props.history.push({pathname: '/table'})}>テーブルに着席</Button>
      </div>
    );
  }
}

export default withRouter(Top);