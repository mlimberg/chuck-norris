import './joke-container-style';
import React, { Component } from 'react';
import JokeCard from '../JokeCard/JokeCard';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default class JokeContainer extends Component {
  constructor() {
    super();
    this.state = {
      num: '',
      jokes: [],
      showFaves: false
    }
  }

  fetchNewJokes() {
    fetch(`http://api.icndb.com/jokes/random/${this.state.num}?escape=javascript`).then((response) => {
      return response.json()
    }).then((data) => {
      return data.value.map(obj => obj.joke)
    }).then(array => {
      this.setState({ jokes: array, num: '' })
    })
  }

  render() {
    let welcomeMessage = (
      <div id='welcome-msg'>Click Get Jokes!</div>
    )
    let jokes = this.state.jokes.length > 0 ? this.state.jokes.map(joke => <JokeCard key={Math.random()} joke={joke} />) : welcomeMessage

    return (
      <div>
        <div id='joke-controls'>
          <div id='new-joke-generator'>
            <Button id='new-joke-btn'
                    text='New Jokes'
                    disabled={!this.state.num}
                    handleClick={this.fetchNewJokes.bind(this)}/>
            <Input id='joke-num-input'
                   type='numberg'
                   value={this.state.num}
                   handleChange={(e) => this.setState({ num: e.target.value })}/>
          </div>
            <Button id='faves-btn'
                    text='Favorites'
                    disabled={!this.state.showFaves}/>
        </div>
        <div id='joke-card-container'>
          {jokes}
        </div>
      </div>
    )
  }
}
