import './joke-container-style';
import React, { Component } from 'react';
import JokeCard from '../JokeCard/JokeCard';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class JokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      showFaves: false
    }
  }

  render() {
    let welcomeMessage = (<div id='welcome-msg'>Click Get Jokes!</div>)

    let jokes = this.props.jokes.length > 0 ? this.props.jokes.map((e, i) => {
      return (
        <div id='joke-card-container' key={i}>
          <JokeCard id={e.id}
                    joke={e.joke}
                    fave={e.fave}
                    addToFaves={this.props.addToFaves}
                    updateFave={this.props.updateFave}
                    removeFromFaves={this.props.removeFromFaves}/>
        </div>
      )
    }) : welcomeMessage

    return (
      <div>
        <div id='joke-controls'>
          <div id='new-joke-generator'>
            <Button id='new-joke-btn'
                    className='button'
                    text='Get Jokes'
                    disabled={!this.state.num}
                    handleClick={() => {
                      this.props.getJokes(this.state.num);
                      this.setState({ num: '' })
                    }}/>
            <Input id='joke-num-input'
                   type='number'
                   value={this.state.num}
                   handleChange={(e) => this.setState({ num: e.target.value })}/>
          </div>
            <Button id='faves-btn'
                    className='button'
                    text={this.state.showFaves ? 'All' : 'Favorites'}
                    // disabled={this.state.showFaves}
                    handleClick={() => {
                      this.setState({ showFaves: !this.state.showFaves }, () => {
                        this.props.showFaves(this.state.showFaves)
                      })
                    }}/>
        </div>
          {jokes}
      </div>
    )
  }
}
