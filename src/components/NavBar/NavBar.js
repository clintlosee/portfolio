import React from 'react';
import Link from 'gatsby-link';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { MobileNav } from './index';
import './navBar.css';

const NavBarStyle = styled.div`
  list-style-type: none;
  width: 100%;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
  background-color: #f1f1f1;
  z-index: 500;
`;

const SiteTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.7rem;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.orange};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const NavBar = ({ siteTitle }) => (
  <div>
    <ul className="navBar">
      <li className="nav-item nav-name">
        <SiteTitle>
          <Link to="/">{siteTitle}</Link>
        </SiteTitle>
      </li>
      <li className="nav-item nav-last">
        <Link to="/contact/" className="nav-link">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about/" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio/" className="nav-link">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
    </ul>
    <MediaQuery query="(max-width: 770px)">
      <MobileNav />
    </MediaQuery>
  </div>
);

export default NavBar;
