import './joke-container-style';
import React, { Component } from 'react';
import JokeCard from '../JokeCard/JokeCard';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Home from '../Home/Home'

export default class JokeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props.jokes)
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
        <Home getJokes={this.props.getJokes}/>
        {jokes}
      </div>
    )
  }
}
