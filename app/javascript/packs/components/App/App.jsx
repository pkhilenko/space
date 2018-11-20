import React, { Component } from 'react'
import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import ItemList from '../Item-list/Item-list';
import PeoplePage from '../People-page/People-page'
import ErrorIndicator from '../Error-indicator/Error-indicator'
import SwapiService from '../../../services/swapi-service'
import ItemDetails, { Record } from '../Item-details/Item-details'
import ErrorBoundry from '../Error-boundry/Error-boundry'
import Row from '../Row/Row'
import './App.scss'

class App extends Component {
  swapiService = new SwapiService()
 
  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
      hasError: false
    });
  };
 
  render () { 
    const { getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService
    
    const personDetails = (
      <ErrorBoundry >
        <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage} >
          <Record field='gender' label='Gender' />
          <Record field='eyeColor' label='Eye Color' />
          <Record field='birthYear' label='День рождения' />
        </ItemDetails>
      </ErrorBoundry >
    )

    const starshipDetails = (
      <ErrorBoundry >
        <ItemDetails itemId={10} getData={getStarship} getImageUrl={getStarshipImage} >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="crew" label="Экипаж" />
        </ItemDetails>
      </ErrorBoundry >
    )

    return (
      <div>
        <Header />

        <Row left={personDetails} right={starshipDetails} />
 
      </div>
    )
  }
}
 
export default App

