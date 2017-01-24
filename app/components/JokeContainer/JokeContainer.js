import React from 'react';
import './joke-container-style';
import JokeCard from '../JokeCard/JokeCard';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

const JokeContainer = (props) => {
  return (
    <div className='body'>
      <FeatureJoke joke={props.joke} />
      <JokeCard />
    </div>
  )
}

export default JokeContainer;
