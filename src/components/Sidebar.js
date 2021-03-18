import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import { SidebarStyles } from '../styles/SidebarStyles'

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <SidebarStyles className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
    <button type="button" className="close-btn" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
    </div>
  </SidebarStyles>
)

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

export default Sidebar
