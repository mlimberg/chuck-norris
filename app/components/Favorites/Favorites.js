import React from 'react';
import './favorites-style';
import Home from '../Home/Home';
import JokeCard from '../JokeCard/JokeCard';

const Favorites = (props) => {
  console.log(props)
  let NoFavesMessage = (<div id='no-faves-msg'>No Flava Faves Yet!</div>)
  let { favorites, removeFromFaves, updateFave, addToFaves } = props;

  let faves = favorites.length > 0 ? favorites.map((e, i) => {
    return (
      <div id='joke-card-container' key={i}>
        <JokeCard id={e.id}
                  joke={e.joke}
                  fave={e.fave}
                  addToFaves={addToFaves}
                  updateFave={updateFave}
                  removeFromFaves={removeFromFaves}/>
      </div>
    )
  }) : NoFavesMessage

  return (
    <div>
      <Home getJokes={props.getJokes}/>
      {faves}
    </div>
  );
}

Favorites.propTypes = {

}

export default Favorites;
