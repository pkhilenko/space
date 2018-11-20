import React, { Component } from 'react'
import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import ItemList from '../Item-list/Item-list';
import PeoplePage from '../People-page/People-page'
import ErrorIndicator from '../Error-indicator/Error-indicator'
import SwapiService from '../../../services/swapi-service'
import ItemDetails from '../Item-details/Item-details'
import Row from '../Row/Row'
import './App.scss'

class App extends Component {
  swapiService = new SwapiService()

  state = {
    hasError: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
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

    const { getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage} />
    )

    const starshipDetails = (
      <ItemDetails itemId={10} getData={getStarship} getImageUrl={getStarshipImage} />
    )

    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row left={personDetails} right={starshipDetails} />



        <PeoplePage />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPlanets}
              >
              {({ name, population }) => `${name}, population: ${population}`}
            </ItemList>

          </div>
          <div className="col-md-6">
            <ItemDetails itemId={this.state.selectedItem} />
          </div>
        </div>
      </div>
    )
  }
}
 
export default App

