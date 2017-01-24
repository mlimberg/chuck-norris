import React, { Component } from 'react'
import Header from '../Header/Header';
import JokeContainer from '../JokeContainer/JokeContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureJoke: '',
      jokeArray: [],
    }
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/1?escape=javascript').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ featureJoke: data.value[0].joke })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <JokeContainer joke={this.state.featureJoke}/>
        {this.props.children}
      </div>
    );
  }
}
