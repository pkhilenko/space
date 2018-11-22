import React, { Component } from 'react'
import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import ItemList from '../Item-list/Item-list';
import PeoplePage from '../People-page/People-page'
import ErrorIndicator from '../Error-indicator/Error-indicator'
import SwapiService from '../../../services/swapi-service'
import PersonDetails from '../Person-details/Person-details'
import './App.scss'

class App extends Component {
  swapiService = new SwapiService()

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

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}
 
export default App

