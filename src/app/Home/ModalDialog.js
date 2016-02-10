import React from 'react';
import {Button, Modal} from 'react-bootstrap';

import style from './Home.css';

export default class Dialog extends React.Component{

  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  onChange(e) {
    console.log(e.target.value)
    this.setState({input: e.target.value})
  }

  render () {
    const display = {display: this.props.display? "block" : "none"}
    return <div className="static-modal" style={display}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Idea?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="text"  onChange={this.onChange.bind(this)}/>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.cancelCallback}>Close</Button>
          <Button bsStyle="primary" onClick={this.props.saveCallback.bind(this, this.state.input)}>Add item</Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
  }
};

