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
      return <JokeCard key={i} id={e.id} joke={e.joke} />
    }) : welcomeMessage

    return (
      <div>
        <div id='joke-controls'>
          <div id='new-joke-generator'>
            <Button id='new-joke-btn'
                    text='New Jokes'
                    disabled={!this.state.num}
                    handleClick={() => {
                      this.props.getJokes(this.state.num);
                      this.setState({ num: '' })
                    }}/>
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
