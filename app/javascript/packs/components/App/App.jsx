import React, { Component } from 'react'
import Header from '../Header/Header'
import SwapiService from '../../../services/swapi-service'
import ItemDetails, { Record } from '../Item-details/Item-details'
import ErrorBoundry from '../Error-boundry/Error-boundry' 
import RandomPlanet from '../Random-planet/Random-planet'
import Row from '../Row/Row'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages'
import { SwapiServiceProvider } from '../swapi-service-context'
import './App.scss'

class App extends Component {
  swapiService = new SwapiService()
 
  render () { 
    return (
      <ErrorBoundry>
        <Header />
        <RandomPlanet />
        <SwapiServiceProvider value={this.swapiService} >
          <div className="App">
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider >
      </ErrorBoundry>
    )
  }
}
 
export default App

