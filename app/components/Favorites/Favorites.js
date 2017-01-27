import '../JokeCard/joke-card-style';
import './favorites-style'
import React from 'react';
import Home from '../Home/Home';
import JokeCard from '../JokeCard/JokeCard';

const Favorites = (props) => {
  let NoFavesMessage = (<div id='no-faves-msg'>No Flava Faves</div>);
  let { favorites, updateFave, getJokes } = props;
  let faves = favorites.length > 0 ? favorites.map((e, i) => {
    return (
        <JokeCard id={e.id}
                  joke={e.joke}
                  fave={e.fave}
                  updateFave={updateFave}
                />
    )
  }) : NoFavesMessage
  return (
    <div>
      <Home {...props}/>
      <div id='jokes-container'>
      {faves}
      </div>
    </div>
  );
}

Favorites.propTypes = {
  favorites: React.PropTypes.array,
  updateFave: React.PropTypes.func,
  getJokes: React.PropTypes.func,
}

export default Favorites;
