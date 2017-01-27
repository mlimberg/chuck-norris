import './feature-joke-style';
import React from 'react';

const FeatureJoke = (props) => {
  return (
    <div id='feature-joke-container'>
      <article id='feature-joke'>{props.joke}</article>
    </div>
  )
}

FeatureJoke.propTypes = {
  joke: React.PropTypes.string
}

export default FeatureJoke;
