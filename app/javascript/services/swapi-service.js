import 'babel-polyfill'
import axios from '../packs/axios/axios-space'

export default class SwapiService {
  _imageBase = 'https://starwars-visualguide.com/assets/img'

  getResource = async (url) => {
    const res = await axios.get(url);
    if (res.statusText != "OK") {
      throw new (Error)(`Could not fetch ${url}, reseived ${res.statusText}`)
    }
    return await res;
  }

    
  getAllPeople = async () => {
    const person = await this.getResource('/people/');
    return person.data.map(this._transformPerson);
  }  

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`)
    return this._transformPerson(person.data)
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.data.map(this._transformPlanet);
  }  

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(planet.data)
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.data.map(this._transformStarship);
  }  

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`)
    return this._transformStarship(starship.data)
  }
  
  getPersonImage = ({ id }) => {
    console.log('ID', id)
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

 
  _transformPlanet(planet) {
    return {
      id: planet.id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
      id:  starship.id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      length: starship.length,
      crew: starship.crew
    }
  }

  _transformPerson(person) {
    return {
      id: person.id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_day,
      eyeColor: person.eye_color
    }
  }
}
