import React from 'react'
import ItemList from '../Item-list/Item-list'
import withData  from '../Hoc-helpers/With-data'
import SwapiService from '../../../services/swapi-service'

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

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

const PersonList = withData(
                      withChildFunction(ItemList, renderName),
                      getAllPeople);

const PlanetList = withData(
                      withChildFunction(ItemList, renderPlanetNamePopulation),
                      getAllPlanets);

const StarshipList = withData(
                      withChildFunction(ItemList, renderModelAndName),
                      getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
