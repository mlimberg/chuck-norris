import './joke-card-style';
import React from 'react';
import Button from '../Button/Button';

const JokeCard = (props) => {

  return (
    <div className='joke-card'>
      {props.joke}
        <Button className={`fave-btn ${props.fave ? 'favorite' : ''}`}
                id={props.id} text='★'
                handleClick={() => {
                  props.updateFave(props.id)
                }} />
    </div>
  )
}

JokeCard.propTypes = {
  joke: React.PropTypes.string,
  fave: React.PropTypes.bool,
  id: React.PropTypes.number
}

export default JokeCard;
