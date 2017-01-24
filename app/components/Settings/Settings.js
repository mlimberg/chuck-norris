// import './settings-style';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div id='settings-container'>
        <div id='name-set-controls'>
          <p>Set Name:</p>
          <Input id='name-set-input'
                 value={this.state.name}
                 handleChange={(e) => {this.setState({ name: e.target.value })}}
                />
        </div>
        <div id='parental-controls'>

        </div>
      </div>
    )
  }
}
