import './home-style';
import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      showFaves: ''
    }
  }

  render() {
    return (
      <div id='joke-controls'>
        <div id='new-joke-generator'>

          <Link to='/jokes'>
            <Button id='new-joke-btn'
                    className='button'
                    text='Get Jokes'
                    disabled={!this.state.num}
                    handleClick={() => {
                      this.props.getJokes(this.state.num);
                      this.setState({ num: '' })
                    }}/>
          </Link>

          <Input id='joke-num-input'
                 type='number'
                 value={this.state.num}
                 handleChange={(e) => this.setState({ num: e.target.value })}/>
        </div>

        <div>
          <Link to='/favorites'>
            <button id='faves-btn'
              className='button'
              // disabled={this.state.showFaves}
            >{this.state.showFaves ? 'All' : 'Favorites'}</button>
        </Link>
        </div>
      </div>
    )
  }
}
