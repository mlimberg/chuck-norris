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

JokeCard.propTypes = {
  joke: React.PropTypes.string
}

export default JokeCard;
