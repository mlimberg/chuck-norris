import React, { Component } from 'react'
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureJoke: '',
      jokes: [],
      showFaves: false
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
    fetch(`http://api.icndb.com/jokes/random/${num}?escape=javascript`).then((response) => {
      return response.json()
    }).then((data) => {
      let updatedData = data.value.map(obj => Object.assign(obj, { fave: false }))
      this.setState({ jokes: updatedData })
    })
  }

  updateJoke(id) {
    let updatedJokes = this.state.jokes.map(joke => {
      if(joke.id === id) {
        joke.fave = !joke.fave
      }
      return joke
    })
    this.setState({ jokes: updatedJokes })
  }

  showFaves() {
    this.setState({ showFaves: !this.state.showFaves })
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      getJokes: this.fetchJokes.bind(this),
      num: this.setNum,
      jokes: this.state.jokes,
      updateFave: this.updateJoke.bind(this),
      showFaves: this.showFaves.bind(this)
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
