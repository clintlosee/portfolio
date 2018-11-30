import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../styles/Title';
import ItemStyles from '../styles/ItemStyles';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;

    return (
      <ItemStyles>
        <img src={item.image2} alt={item.title} />
        <Title>
          <a href={item.link} target={item.target}>
            {item.header}
          </a>
        </Title>
        <p>{item.description}</p>
        <span>Technologies: {item.tech}</span>
        <div className="buttonList">
          <button>
            <a href={item.link} target={item.target}>
              View
            </a>
          </button>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
