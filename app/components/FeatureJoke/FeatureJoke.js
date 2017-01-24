import './feature-joke-style';
import React from 'react';

const FeatureJoke = (props) => {
  return (
    <div>
      <article id='feature-joke'>{props.joke}</article>
    </div>
  )
}

export default FeatureJoke;
