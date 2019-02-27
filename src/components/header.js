import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavBar } from './NavBar';

const HeaderDiv = styled.div`
  background: none;
  margin-bottom: 1.5em;
  div {
    margin: 0 auto;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <NavBar siteTitle={siteTitle} />
  </HeaderDiv>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
