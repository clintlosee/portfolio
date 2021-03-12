import React from 'react'
import PropTypes from 'prop-types'
import { FaAlignRight } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import logo1 from '../assets/logo1.svg'
import PageLinks from '../constants/links'

const Navbar = ({ toggleSidebar }) => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo1} alt="Clint Losee Logo" width="157" />
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>
)

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
}

export default Navbar
