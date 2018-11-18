import React, { Component } from 'react'
import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import ItemList from '../Item-list/Item-list';
import PeoplePage from '../People-page/People-page'
import ErrorIndicator from '../Error-indicator/Error-indicator'
import './App.scss'

class App extends Component {
  state = {
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
      hasError: false
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render () { 
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}
 
export default App

