import './joke-container-style';
import React, { Component } from 'react';
import JokeCard from '../JokeCard/JokeCard';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Home from '../Home/Home'

const JokeContainer = (props) => {
  let welcomeMessage = (<div id='welcome-msg'>Click Get Jokes!</div>)

  let jokes = props.jokes.length > 0 ? props.jokes.map((e, i) => {
    return (
      <div id='joke-card-container' key={i}>
        <JokeCard id={e.id}
                  joke={e.joke}
                  fave={e.fave}
                  addToFaves={props.addToFaves}
                  updateFave={props.updateFave}
                  removeFromFaves={props.removeFromFaves}/>
      </div>
    )
  }) : welcomeMessage
  
  return (
    <div>
      <Home getJokes={props.getJokes}/>
      {jokes}
    </div>
  );
}

export default JokeContainer;
