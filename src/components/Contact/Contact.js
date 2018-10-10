import React, { Component } from 'react';
// import * as FontAwesome from 'react-icons/fa';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { encode } from 'punycode';
import { navigateTo } from 'gatsby-link';
import './contact.css';

const ContactDiv = styled.div`
  max-width: 960px;
  margin: 5rem auto;
  @media (max-width: 770px) {
    margin-top: 3rem;
  }
`;

const HiddenInput = styled.p`
  display: none;
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'calc(50% - 16px)'
  },
  textFieldMessage: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: '10px',
    padding: '5px 30px',
    width: '150px'
  },
  message: {
    marginBottom: 40
  }
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    const { classes } = this.props;

    return (
      <ContactDiv>
        <div className="contact section contact-section">
          <Divider horizontal className={classes.message}>
            <Header size="huge">Contact Me</Header>
            Send Me A Message
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
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            placeholder="What's Your Name?"
          />
          <TextField
            id="outlined-email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
            variant="outlined"
            placeholder="email@gmail.com"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows="6"
            className={classes.textFieldMessage}
            value={this.state.message}
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

export default withStyles(styles)(Contact);
