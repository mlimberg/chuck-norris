import React from 'react';
import './favorites-style';
import Home from '../Home/Home';

const Favorites = (props) => {
  console.log(props)
  return (
    <div>
      <Home getJokes={props.getJokes}/> 
      Favorites!
    </div>
  );
}

Favorites.propTypes = {

}

export default Favorites;
