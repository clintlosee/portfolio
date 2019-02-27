import React, { Component } from 'react';
// import * as FontAwesome from 'react-icons/fa';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import './contact.css';

const ContactDiv = styled.div`
  max-width: 960px;
  margin: 5rem auto;
  font-size: 2rem;
  @media (max-width: 770px) {
    margin-top: 3rem;
  }
`;

const HeaderSpan = styled.span`
  font-size: 1.5rem;
`;

// const HiddenInput = styled.p`
//   display: none;
// `;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'calc(50% - 16px)',
  },
  textFieldMessage: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: '10px',
    padding: '5px 30px',
    width: '150px',
  },
  message: {
    marginBottom: 40,
  },
});

const encode = data => {
  const formdata = Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  return formdata;
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const form = e.target;
    fetch('/contact?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        form,
        ...this.state,
      }),
    })
      .then(res => {
        navigateTo(form.getAttribute('action'));
      })
      .catch(error => alert(error));
    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { name, email, message } = this.state;

    return (
      <ContactDiv>
        <div className="contact section contact-section">
          <Divider horizontal className={classes.message}>
            <Header size="huge">Contact Me</Header>
            <HeaderSpan>Send Me A Message</HeaderSpan>
          </Divider>
        </div>

        <form
          name="contact"
          method="post"
          action="/thanks/"
          className={classes.container}
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          {/* <HiddenInput className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </HiddenInput> */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            className={classes.textField}
            value={name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            placeholder="What's Your Name?"
          />
          <TextField
            id="outlined-email"
            label="Email"
            name="email"
            className={classes.textField}
            value={email}
            onChange={this.handleChange('email')}
            margin="normal"
            variant="outlined"
            placeholder="email@gmail.com"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="message"
            multiline
            rows="6"
            className={classes.textFieldMessage}
            value={message}
            onChange={this.handleChange('message')}
            margin="normal"
            variant="outlined"
            placeholder="What can I help you with?"
          />
          <Button variant="contained" className={classes.button} type="submit">
            Send
          </Button>
        </form>
      </ContactDiv>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Contact);
