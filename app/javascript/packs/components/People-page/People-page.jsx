import React, { Component } from 'react'
import ItemList from '../Item-list/Item-list'
import PersonDetails from '../Person-details/Person-details'
import SwapiService from '../../../services/swapi-service'
import Row from '../Row/Row'
import ErrorBoundry from '../Error-boundry/Error-boundry'
import './People-page.scss'



export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  };

  render() {
    const itemList = 
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        
      > 
        {(i) => `${i.name}, ${i.gender}, ${i.birthYear}`}
      </ItemList >

    const personDetails = <PersonDetails personId={this.state.selectedPerson} />

    return (
      <ErrorBoundry >
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
