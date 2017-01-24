import React from 'react';
import './joke-container-style';
import JokeCard from '../JokeCard/JokeCard';

const JokeContainer = (props) => {
  return (
    <div className='body'>
      <JokeCard />
    </div>
  )
}

export default JokeContainer;
