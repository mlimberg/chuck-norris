import './joke-card-style';
import React from 'react';
import Button from '../Button/Button';

const JokeCard = (props) => {
  return (
    <div className='joke-card' id={props.id}>
      {props.joke}
      <Button id='fave-btn' text='★' handleClick={() => console.log('fave!')} />
    </div>
  )
}

JokeCard.propTypes = {
  joke: React.PropTypes.string
}

export default JokeCard;
