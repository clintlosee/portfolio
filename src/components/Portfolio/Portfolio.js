import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/fa';
import styled from 'styled-components';
import './portfolio.css';
import Item from './Item';
import items from './portfolioItems.js';

const PortfolioList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 10vh auto 5vh;
`;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      loading: true
    };
  }

  renderPortfolio() {
    return items.map(item => {
      return <Item item={item} key={item.header} />;
    });
  }

  render() {
    return <div>{<PortfolioList>{this.renderPortfolio()}</PortfolioList>}</div>;
  }
}

export default Portfolio;
