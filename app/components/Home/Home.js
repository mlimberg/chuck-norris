import './home-style';
import React, { Component } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { num: '' }
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
                 placeholder='5'
                 handleChange={(e) => this.setState({ num: e.target.value })}
               />
        </div>

        <div>
          <Link to={this.props.location.pathname === '/jokes' ? '/favorites' : '/jokes'}>
            <button id='faves-btn' className='button'>
              {this.props.location.pathname === '/jokes' ? 'Favorites' : 'All Jokes'}
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  getJokes: React.PropTypes.func
}
