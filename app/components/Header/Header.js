import './header-style';
import React, { Component } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: false,
      btnText: 'Settings'
    }
  }

  render() {
    return (
      <div className="Header">

        <h1 id='main-h1'>CHUCK NORRIS JOKE MACHINE</h1>

        <Link to={this.state.settings? '/' : '/settings'}>
          <Button className='button'
                  id='settings-btn'
                  text={this.state.settings ? 'Jokes' : 'Settings'}
                  handleClick={() => this.setState({ settings: !this.state.settings })}
                  />
        </Link>

    </div>
  );
  }
}
