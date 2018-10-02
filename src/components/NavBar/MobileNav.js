import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';
import './mobileNav.css';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MobileNav extends Component {
    state = {
        anchorEl: null
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
        console.log(event.currentTarget);
    }

    handleClose = (event) => {
        this.setState({ anchorEl: null });
        console.log(event.currentTarget);
    }

    handleLinkClick = (linkTo) => {
        console.log(linkTo);
        navigateTo(linkTo);
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div className="mobile-nav">
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    className="mobile-nav_btn"
                >
                    Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={() => navigateTo('/')}>Home<Link to="/" className="nav-link">Home</Link></MenuItem>
                    <MenuItem onClick={() => navigateTo('/about')}>About<Link to="/about/" className="nav-link">About</Link></MenuItem>
                    <MenuItem onClick={() => navigateTo('/portfolio')}>Portfolio<Link to="/portfolio/" className="nav-link">Portfolio</Link></MenuItem>
                    <MenuItem onClick={() => navigateTo('/contact')}>Contact<Link to="/contact/" className="nav-link">Contact</Link></MenuItem>
                </Menu>
            </div>
        )
    }
}

// const MobileNav = ({ siteTitle }) => (
//     <div>
//         <ul className="navBar">
//             <li className="nav-item nav-name"><Link to="/">{siteTitle}</Link></li>
//             <li className="nav-item nav-last"><Link to="/contact/" className="nav-link">Contact</Link></li>
//             <li className="nav-item"><Link to="/about/" className="nav-link">About</Link></li>
//             <li className="nav-item"><Link to="/portfolio/" className="nav-link">Portfolio</Link></li>
//             <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
//         </ul>
//     </div>
// )

export default MobileNav;
