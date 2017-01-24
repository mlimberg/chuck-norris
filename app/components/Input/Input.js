import './input-style';
import React from 'react';

const Input = (props) => {
  return (
    <input id={props.id}
           className='input'
           value={props.value}
           onChange={(e) => props.handleChange(e)} />
  )
}

export default Input
