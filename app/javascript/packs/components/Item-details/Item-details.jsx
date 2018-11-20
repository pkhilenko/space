import React, { Component } from 'react';
import './Item-details.scss';
import SwapiService from '../../../services/swapi-service'
import Spinner from '../Spinner/Spinner'
export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ item, image: getImageUrl(item) });
      });
  }
  render() {
    if (!this.state.item) {
      return (
        <div>
          <span>Select a item from a list</span>;
          <Spinner />
        </div>
      
      )
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.item
    const { image } = this.state
    

    return (
      <div className="Item-details card">
        <img className="item-image"
          src={image}
          alt="character" />

        <div className="card-body">
          <h4>{name} {this.props.itemId}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Day</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
