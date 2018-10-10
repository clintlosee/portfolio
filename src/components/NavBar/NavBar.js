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
  line-height: 2;
  @media (max-width: 770px) {
    font-size: 1rem;
    line-height: 3.5;
  }
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.orange};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    @media (max-width: 770px) {
      padding: 0.5rem;
    }
    :hover {
      color: rgba(255, 255, 255, 0.4);
      /* background-color: rgba(221, 88, 0, 1);
      color: transparent;
      text-shadow: 0 2px 3px rgba(255, 255, 255, 0.5);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text; */
    }
  }
  /* a:hover {
    color: #ddd;
  } */
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
