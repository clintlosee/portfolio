import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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

export default Header;
