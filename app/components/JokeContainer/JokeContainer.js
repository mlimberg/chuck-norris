import './joke-container-style';
import React, { Component } from 'react';
import JokeCard from '../JokeCard/JokeCard';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class JokeContainer extends Component {
  constructor() {
    super();
    this.state = {
      jokes: ['funny', 'stuff', 'haha', 'funny', 'stuff']
    }
  }

  componentDidMount() {
    // fetch()
  }

  render() {
    let jokes = this.state.jokes.map(joke => <JokeCard key={Math.random()} joke={joke} />)

    return (
      <div>
        <div id='joke-controls'>
          <div id='new-joke-generator'>
            <Button text='New Jokes'/>
            <Input />
          </div>
            <Button id='faves-btn' text='Favorites'/>
        </div>
        <div id='joke-card-container'>
          {jokes}
        </div>
      </div>
    )
  }
}
