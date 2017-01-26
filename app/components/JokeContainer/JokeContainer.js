import './joke-container-style';
import React, { Component } from 'react';
import JokeCard from '../JokeCard/JokeCard';
import Input from '../Input/Input';
import Home from '../Home/Home'

const JokeContainer = (props) => {
  let welcomeMessage = (<div id='welcome-msg'>Click Get Jokes!</div>);
  let { jokes, updateFave, getJokes } = props;

  let allJokes = props.jokes.length > 0 ? props.jokes.map((e, i) => {
    return (
      <div id='joke-card-container' key={i}>
        <JokeCard id={e.id}
                  joke={e.joke}
                  fave={e.fave}
                  updateFave={updateFave}
                />
      </div>
    )
  }) : welcomeMessage

  return (
    <div>
      <Home getJokes={getJokes} all={props}/>
      {allJokes}
    </div>
  );
}

JokeCard.propTypes = {
  favorites: React.PropTypes.array,
  updateFave: React.PropTypes.func,
  getJokes: React.PropTypes.func,
  all: React.PropTypes.object
}

export default JokeContainer;
