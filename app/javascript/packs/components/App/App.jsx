import React, { Component } from 'react'
import Header from '../Header/Header'
import SwapiService from '../../../services/swapi-service'
import ItemDetails, { Record } from '../Item-details/Item-details'
import ErrorBoundry from '../Error-boundry/Error-boundry' 
import RandomPlanet from '../Random-planet/Random-planet'
import Row from '../Row/Row'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages'
import { SwapiServiceProvider } from '../swapi-service-context'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'

class App extends Component {
  swapiService = new SwapiService()
 
  render () { 
    return (
      <ErrorBoundry>
        <Header />
        <RandomPlanet />
        <SwapiServiceProvider value={this.swapiService} >
            <Router>
        
          <div className="App">
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />
            
          </div>
          </Router>
        </SwapiServiceProvider >
      </ErrorBoundry>
    )
  }
}
 
export default App

