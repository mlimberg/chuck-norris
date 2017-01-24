import React from 'react';
import './joke-container-style';
import JokeCard from '../JokeCard/JokeCard';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

const JokeContainer = (props) => {
  return (
    <div className='body'>
      <div id='feature-joke-container'>
        <FeatureJoke joke={props.joke} />
      </div>
      <div id='joke-card-container'>
        <JokeCard />
      </div>
    </div>
  )
}

export default JokeContainer;
