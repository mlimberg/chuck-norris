import React, { Component } from 'react'
import Header from '../Header/Header';
import FeatureJoke from '../FeatureJoke/FeatureJoke';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featureJoke: '',
      jokes: [],
      favorites: [],
      firstName: 'Chuck',
      lastName: 'Norris',
      pControls: false
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
    let pControls = this.state.pControls ? '&exclude=[explicit]' : ''

    fetch(`http://api.icndb.com/jokes/random/${num}?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}`).then((response) => {
      return response.json()
    }).then((data) => {
      let updatedData = data.value.map(obj => Object.assign(obj, { fave: false }))
      this.setState({ jokes: updatedData })
    })
  }

  addToFaves(joke) {
    let updatedArray = this.state.favorites.slice()
    updatedArray.push(joke)
    this.setState({ favorites: updatedArray })
  }

  removeFromFaves(joke) {
    let newArray = this.state.favorites.filter(item => {
      return item.id !== joke.id
    })
    this.setState({ favorites: newArray })
  }

  updateJoke(id) {
  let updatedJokes = this.state.jokes.map(joke => {
    if(joke.id === id) {
      joke.fave = !joke.fave
      joke.fave ? this.addToFaves(joke) : this.removeFromFaves(joke)
    }
    return joke
  })
  this.setState({ jokes: updatedJokes })
  }

  updatePControls(e) {
    this.setState({ pControls: e })
  }

  updateName(name) {
    this.setState({ firstName: name.split(' ')[0], lastName: name.split(' ')[1] })
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      getJokes: this.fetchJokes.bind(this),
      updateFave: this.updateJoke.bind(this),
      addToFaves: this.addToFaves.bind(this),
      removeFromFaves: this.removeFromFaves.bind(this),
      updateName: this.updateName.bind(this),
      jokes: this.state.jokes,
      favorites: this.state.favorites,
      currentName: `${this.state.firstName} ${this.state.lastName}`,
      updatePControls: this.updatePControls.bind(this),
      pControlStatus: this.state.pControls
    })

    return (
      <div>
        <Header {...this.props}/>
        <FeatureJoke joke={this.state.featureJoke} />
        {Children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
}
