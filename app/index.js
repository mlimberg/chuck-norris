import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import JokeContainer from './components/JokeContainer/JokeContainer';

const App = () => {
  return (
    <div>
      <Header />
      <JokeContainer />
    </div>
  );
}

render(<App />, document.querySelector('.application'));
