import React, { Component } from 'react';

import ItemList from '../Item-list/Item-list';
import PersonDetails, { Record } from '../Item-details/Item-details';
import ErrorIndicator from '../Error-indicator/Error-indicator';
import SwapiService from '../../../services/swapi-service'
import Row from '../Row/Row'
import ErrorBoundry from '../Error-boundry/Error-boundry'
import './People-page.scss';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null 
  };

  onPersonSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    let itemId = this.state.selectedItem
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}>

          {(i) => (
            `${i.name} (${i.birthYear})`
          )}

        </ItemList>
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails 
          itemId={itemId} 
          getData={this.swapiService.getPerson(itemId)}
          getImageUrl={(item) => this.swapiService.getPersonImage(item)}
           >
          <Record field="gender" label='GENDER'/>
          <Record field="eyeColor" label='EYE Color'/>
        </PersonDetails>
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
