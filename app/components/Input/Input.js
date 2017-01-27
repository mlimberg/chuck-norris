import './input-style';
import React from 'react';

const Input = (props) => {
  return (
    <input id={props.id}
           className='input'
           value={props.value}
           type={props.type}
           placeholder={props.placeholder}
           onChange={(e) => props.handleChange(e)} />
  )
}

Input.propTypes = {
  id: React.PropTypes.string,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  type: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default Input
