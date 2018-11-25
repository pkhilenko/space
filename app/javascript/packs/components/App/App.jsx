import React, { Component } from 'react'
import Header from '../Header/Header'
import SwapiService from '../../../services/swapi-service'
import ItemDetails, { Record } from '../Item-details/Item-details'
import ErrorBoundry from '../Error-boundry/Error-boundry' 
import RandomPlanet from '../Random-planet/Random-planet'
import Row from '../Row/Row'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages'
import StarshipDetails from '../Starship-details/Starship-details'
import { SwapiServiceProvider } from '../swapi-service-context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'

class App extends Component {
  swapiService = new SwapiService()
 
  render () { 
    return (
      <Router>
        <ErrorBoundry>
          <Header />
          <RandomPlanet />
          <SwapiServiceProvider value={this.swapiService} >
            <div className="App">
              <Switch >
                <Route path="/" exact render={() => <h2 className='h2-center'>Welcome to Space</h2>} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/starships/:id" render={ ({ match }) => <StarshipDetails itemId={match.params.id} /> } />
                <Route render={() => <h1>Страница не найдена  </h1>} />
              </Switch >
            </div>
          </SwapiServiceProvider >
        </ErrorBoundry>
      </Router>
    )
  }
}
 
export default App

