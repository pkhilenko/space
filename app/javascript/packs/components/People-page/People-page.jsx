import React, { Component } from 'react'
import ItemList from '../Item-list/Item-list'
import PersonDetails from '../Person-details/Person-details'
import ErrorIndicator from '../Error-indicator/Error-indicator'
import SwapiService from '../../../services/swapi-service'
import Row from '../Row/Row'
import './People-page.scss'

export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = 
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(i) => { return `${i.name}, ${i.gender}, ${i.birthYear}` }}
      />
      

    const personDetails = <PersonDetails personId={this.state.selectedPerson} />

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
