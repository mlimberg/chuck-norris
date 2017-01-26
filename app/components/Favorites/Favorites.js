import './favorites-style';
import React from 'react';
import Home from '../Home/Home';
import JokeCard from '../JokeCard/JokeCard';

const Favorites = (props) => {
  let NoFavesMessage = (<div id='no-faves-msg'>No Flava Faves Yet!</div>);
  let { favorites, updateFave, getJokes } = props;
  let faves = favorites.length > 0 ? favorites.map((e, i) => {
    return (
      <div id='joke-card-container' key={i}>
        <JokeCard id={e.id}
                  joke={e.joke}
                  fave={e.fave}
                  updateFave={updateFave}
                />
      </div>
    )
  }) : NoFavesMessage

  return (
    <div>
      <Home favorites={favorites} getJokes={getJokes} all={props}/>
      {faves}
    </div>
  );
}

Favorites.propTypes = {
  favorites: React.PropTypes.array,
  updateFave: React.PropTypes.func,
  getJokes: React.PropTypes.func,
}

export default Favorites;
