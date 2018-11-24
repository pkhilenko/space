import React from 'react'
import ItemList from '../Item-list/Item-list'
import withData  from '../Hoc-helpers/With-data'
import withSwapiService from '../Hoc-helpers/with-swapi-service'

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderPlanetNamePopulation = ({ name, population }) => <span>{name}, &nbsp; population: &nbsp; {population} &nbsp; млн &nbsp;"человек"</span>
const renderModelAndName = ({ model, name }) => <span>{name} &nbsp; *({model})*</span>;


const mapPersonMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople }
}

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)), 
  mapPersonMethodsToProps)
       

const mapPlanetMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets }
}

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderPlanetNamePopulation)), 
  mapPlanetMethodsToProps)


const mapStarshipMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships }
}
                       
const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)), 
  mapStarshipMethodsToProps)
 
export {
  PersonList,
  PlanetList,
  StarshipList
};
