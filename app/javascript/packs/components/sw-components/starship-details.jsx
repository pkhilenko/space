import React from 'react';
import ItemDetails, { Record } from '../Item-details/Item-details';
import withSwapiService from '../Hoc-helpers/with-swapi-service'

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props} >

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="crew" label="Экипаж" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps)
  
