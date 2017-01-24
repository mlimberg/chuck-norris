import React from 'react';
import './joke-card-style';

const JokeCard = (props) => {
  return (
    <div className='joke-card'>
      {props.joke}
      <button>Fave!</button>
    </div>
  )
}

export default JokeCard;
