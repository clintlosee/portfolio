import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react';

const styles = {
    headerLogo: {
        margin: 0,
        padding: 5
    },
    logo: {
        fontSize: '1.5rem',
        margin: 0,
        padding: 2,
        color: 'gray',
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: '200 !important'
    },
    logoBold: {
        fontWeight: 700,
        color: '#FF6600',
        fontStyle: 'normal'
    },
    menuContainer: {
        margin: '0 5%'
    }
};

export default class HeaderMenu extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem, visible } = this.state;

        return (
            <div style={{ backgroundColor: '#1b1c1d', }}>
                <Menu stackable inverted borderless style={styles.menuContainer}>
                    <Menu.Item name="home" as="h1" style={styles.headerLogo} onClick={this.handleItemClick}>
                        {
                            // <img src="/logo.png" />
                        }
                        <Link to="/" style={styles.logo}><span style={styles.logoBold}>Clint</span> Losee<br/> Digital <span style={styles.logoBold}>Portfolio</span></Link>
                    </Menu.Item>
                    <Menu.Menu position="right" icon="labeled">
                        <Menu.Item
                            name="home"
                            as="span"
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="home" to="/">
                                <Icon name='home' />
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="about"
                            as="span"
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="about" to="/about">
                                <Icon name='user' />
                                About
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="contact"
                            as="span"
                            active={activeItem === 'contact'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="contact" to="/contact">
                                <Icon name='talk' />
                                Contact
                            </Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
};
