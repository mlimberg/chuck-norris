import React, { Component } from 'react'
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureJoke: '',
      jokes: [],
      showFaves: false,
      firstName: 'Chuck',
      lastName: 'Norris'
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

  showFaves(faveStatus) {
    this.setState({ showFaves: faveStatus })
  }

  updateName(name) {
    this.setState({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
  }

  filterFaves() {
    return this.state.jokes.filter(joke => {
      if(joke.fave) {
        return joke
      }
    })
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      getJokes: this.fetchJokes.bind(this),
      num: this.setNum,
      jokes: this.state.showFaves ? this.filterFaves() : this.state.jokes,
      updateFave: this.updateJoke.bind(this),
      showFaves: this.showFaves.bind(this),
      updateName: this.updateName.bind(this),
      currentName: `${this.state.firstName} ${this.state.lastName}`
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
