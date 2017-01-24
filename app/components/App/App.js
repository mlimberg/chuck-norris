import React, { Component } from 'react'
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

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
    const Children = React.cloneElement(this.props.children, {
      jokes: this.state.jokes
    });

    return (
      <div>
        <Header />
        <FeatureJoke joke={this.state.featureJoke} />
        {Children}
      </div>
    );
  }
}
