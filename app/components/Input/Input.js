import './input-style';
import React from 'react';

const Input = (props) => {
  return (
    <input id={props.id}
           className='input'
           value={props.value}
           type={props.type}
           onChange={(e) => props.handleChange(e)} />
  )
}

Input.propTypes = {
  id: React.PropTypes.string,
  // value: React.PropTypes.string,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default Input
