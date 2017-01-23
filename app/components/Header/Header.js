import React from 'react';
import './header-style';

import Button from '../Button/Button';

const logStuff = () => {
  console.log('clicked!');
}

const Header = () => {
  return (
    <div className="Header">
      <h1>CHUCK NORRIS JOKE MACHINE</h1>
      <Button text="Click me eh" handleClick={() => logStuff()} />
    </div>
  );
}

export default Header;
