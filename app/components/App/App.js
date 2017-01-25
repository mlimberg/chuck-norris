import React, { Component } from 'react'
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureJoke: '',
      jokes: [],
    }
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/1?escape=javascript').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ featureJoke: data.value[0].joke })
    })
  }

  fetchJokes(num) {
    let that = this;
    fetch(`http://api.icndb.com/jokes/random/${num}?escape=javascript`).then((response) => {
      return response.json()
    }).then((data) => {
      return data.value.map(obj => obj.joke)
    }).then(array => {
      that.setState({ jokes: array })
    })
  }

  render() {
    const Children = React.cloneElement(this.props.children, {
      getJokes: this.fetchJokes.bind(this),
      num: this.setNum,
      jokes: this.state.jokes
    })

    return (
      <div>
        <Header />
        <FeatureJoke joke={this.state.featureJoke} />
        {Children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
