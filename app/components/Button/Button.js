import React from 'react';
import './button-style';

const Button = (props) => {
  return (
    <button id={props.id}
            className={props.className}
            disabled={props.disabled}
            onClick={() => props.handleClick()}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  // id: React.PropTypes.number && React.PropTypes.string,
  disabled: React.PropTypes.bool,
  handleClick: React.PropTypes.func
}

export default Button;
