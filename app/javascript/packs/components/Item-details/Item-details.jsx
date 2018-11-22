import React, { Component } from 'react';
import './Item-details.scss';
import SwapiService from '../../../services/swapi-service'
import Spinner from '../Spinner/Spinner'

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

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

    const { item, image } = this.state
    const { name } = item
    

    return (
      <div className="Item-details card">
        <img className="item-image"
          src={image}
          alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
