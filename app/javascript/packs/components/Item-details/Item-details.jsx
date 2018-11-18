import React, { Component } from 'react';
import './Item-details.scss';
import SwapiService from '../../../services/swapi-service'
import Spinner from '../Spinner/Spinner'
import ErrorIndicator from '../Error-indicator/Error-indicator'

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

    getData
      .then((item) => {
        this.setState({ 
          item,
          image: getImageUrl(item)
         });
      });
  }
  render() {
    const { item, image } = this.state;

    if (!item) {
      return (
        <div>
          <span>Select a item from a list</span>;
          <Spinner />
        </div>
      
      )
    }

    const { name } = this.state.item;

    return (
      <div className="Item-details card">
        <img className="item-image"
          src={this.state.image}
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
