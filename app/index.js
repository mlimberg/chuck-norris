import React from 'react';
import { render } from 'react-dom';
// import './styles';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      Hello World

      <Header />
    </div>
  );
}

render(<App />, document.querySelector('.application'));

TESTING!!!
