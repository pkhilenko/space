import React, { Component } from 'react'
import Header from '../Header/Header'
import SwapiService from '../../../services/swapi-service'
import ItemDetails, { Record } from '../Item-details/Item-details'
import ErrorBoundry from '../Error-boundry/Error-boundry'
 
import Row from '../Row/Row'
import './App.scss'

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'


class App extends Component {
  swapiService = new SwapiService()
 
 
  render () { 
    const { getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage,
        getAllPeople,
        getAllPlanets } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={15}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="crew" label="Crew" />
      </ItemDetails>
    );


    return (
      <ErrorBoundry>
        <div className="App">
          <Header />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />

          <PersonList />

          <hr color='#fff' />

          <StarshipList />

          <hr color='#fff' />

          <PlanetList />

          <Row left={personDetails} right={starshipDetails} />

        </div>
      </ErrorBoundry>
    )
  }
}
 
export default App

