import React from 'react'
import PropTypes from 'prop-types'
// import "../css/main.css"
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
