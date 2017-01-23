import React from 'react';
import './button-style';

const Button = (props) => {
  return (
    <button className='button'
            onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
}

export default Button;
