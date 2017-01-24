import React from 'react';
import './joke-container-style';
import JokeCard from '../JokeCard/JokeCard';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

const JokeContainer = (props) => {
  return (
    <div className='body'>
      <div id='feature-joke-container'>
      </div>
      <div id='joke-card-container'>
        <JokeCard jokes={props.jokes}/>
      </div>
    </div>
  )
}

export default JokeContainer;
