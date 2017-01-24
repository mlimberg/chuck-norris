import './header-style';
import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';

const logStuff = () => {
  console.log('clicked!');
}

const Header = () => {
  return (
    <div className="Header">
      <h1>CHUCK NORRIS JOKE MACHINE</h1>


      <Link to='/settings'>
        <Button id='settings-btn' text="Settings" handleClick={() => logStuff()} />
      </Link>
    </div>
  );
}

export default Header;
