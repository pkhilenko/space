import React, { Component } from 'react'
import ItemList from '../Item-list/Item-list'
import ItemDetails from '../Item-details/Item-details'
import SwapiService from '../../../services/swapi-service'
import Row from '../Row/Row'
import ErrorBoundry from '../Error-boundry/Error-boundry'
import './People-page.scss'



export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  };

  render() {
    const itemList = 
      <ErrorBoundry >
        <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}
          
        > 
          {(i) => `${i.name}, ${i.gender}, ${i.birthYear}`}
        </ItemList >
      </ErrorBoundry>

    const itemDetails = 
      <ErrorBoundry >
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
      
    return (
        <Row left={itemList} right={itemDetails} />
    );
  }
}
