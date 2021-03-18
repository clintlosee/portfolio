import React from 'react'
import PropTypes from 'prop-types'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
// import logo from '../assets/logo.svg'
import logo from '../assets/logo1.svg'
import PageLinks from '../constants/links'

const NavStyles = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header img {
    margin-bottom: 0.6rem;
  }
  .toggle-btn {
    font-size: 3.2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    color: var(--clr-primary-2);
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }
    .nav-links li {
      margin-right: 3.2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.8rem 0;
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
      box-shadow: 0px 2px var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`

const Navbar = ({ toggleSidebar }) => (
  <NavStyles className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="Clint Losee Logo" width="157" />
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </NavStyles>
)

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
}

export default Navbar
