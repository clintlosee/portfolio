import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Title from '../styles/Title';
import ItemStyles from '../styles/ItemStyles';
// import PriceTag from './styles/PriceTag'

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;

    return (
      <ItemStyles>
        <Title>
          <a href={item.link} target="_blank">
            {item.header}
          </a>
        </Title>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
        <div className="buttonList">
          <button>
            <a href={item.link}>Link</a>
          </button>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
