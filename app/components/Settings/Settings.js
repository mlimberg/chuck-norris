import './setting-style.scss';
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
          <Button className='button'
                  id='set-name-btn'
                  text='SET'
                  disabled={!this.state.name}
                  handleClick={() => {
                    this.props.updateName(this.state.name);
                    this.setState({ name: '' })
                  }}/>
          <Button className='button'
                  id='reset-name-btn'
                  text='RESET'
                  handleClick={() => this.props.updateName('Chuck Norris')}/>
        </div>
        <div id='current-name'>
          Current Name: {this.props.currentName}
        </div>
        <div id='parental-controls'>
          <p>Parental Controls: </p>
          <Input type='radio'/>
          <Input type='radio'/>
        </div>
      </div>
    )
  }
}
