import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Header, Message, Button, Input, Container, Form, Segment, Divider } from 'semantic-ui-react';

const styles = {
    container: {
        marginTop: 20,
        marginBottom: 40
    },
    message: {
        marginTop: 40,
        marginBottom: 40
    },
    formStyle: {
        marginBottom: 20
    },
    textAreaStyle: {
        width: '100%',
        margin: 0,
        marginTop: '.3em',
        appearance: 'none',
        tapHighlightColor: 'rgba(255, 255, 255, 0',
        padding: '.78571429em 1em 2em',
        backgroundColor: '#fff',
        border: '1px solid rgba(34, 36, 38, .15)',
        outline: 0,
        color: 'rgba(0, 0, 0, .87)',
        borderRadius: '.28571429rem',
        boxShadow: '0 0 0 0 transparent inset',
        transition: 'color .1s ease,border-color .1s ease',
        fontSize: '1em',
        lineHeight: 1.2857,
        resize: 'vertical'
    },
    inputStyle: {
        padding: '.3em 0 1em'
    },
    buttonStyle: {
        marginTop: '1em'
    }
};

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export default class ContactPage extends Component {
    state = { success: false };
    handleChange = (e, { value }) => this.setState({ value });
    handleSubmit = () => this.setState({ success: true });

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // handleSubmit = e => {
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: encode({ 'form-name': 'contact', ...this.state })
    //     })
    //         .then(() => {
    //             alert('Success! Thank you for contacting me.');
    //             this.setState({});
    //         })
    //         .catch(() => alert(error));

    //     e.preventDefault();
    // };

    render() {
        return (
            <div>
                <Container style={styles.container}>
                    <Divider horizontal style={styles.message}>
                        <Header size="huge">Contact Me</Header>
                        Send Me A Message
                    </Divider>

                    <Segment raised padded color="orange" style={styles.formStyle}>
                        <Form
                            action="https://send.pageclip.co/3oMr9mtH0kSj1HIHiuD8YAe4zxxOIyjG"
                            method="post"
                            className="pageclip-form"
                            onSubmit={this.handleSubmit}
                        >
                            <Form.Group widths="equal">
                                <Form.Input
                                    size="large"
                                    type="text"
                                    name="name"
                                    fluid
                                    label="Name"
                                    placeholder="What's your name?"
                                />
                                <Form.Input
                                    size="large"
                                    type="text"
                                    name="email"
                                    fluid
                                    label="Email"
                                    placeholder="email@gmail.com"
                                />
                            </Form.Group>
                            <Form.TextArea
                                size="large"
                                type="text"
                                name="message"
                                label="Message"
                                placeholder="What can I help you with?"
                            />
                            <Form.Button type="submit" content="Submit" />
                        </Form>
                    </Segment>
                </Container>

                {
                    // <Container style={styles.container}>
                    //     <Divider horizontal style={styles.message}>
                    //         <Header size="huge">Contact Me</Header>
                    //         Send Me A Message
                    //     </Divider>
                    //     <Segment raised padded color="orange" style={styles.formStyle}>
                    //         <form
                    //             name="contact"
                    //             method="post"
                    //             data-netlify="true"
                    //             data-netlify-honeypot="bot-field"
                    //             onSubmit={this.handleSubmit}
                    //         >
                    //             <p hidden>
                    //                 <label>
                    //                     Don’t fill this out: <input name="bot-field" />
                    //                 </label>
                    //             </p>
                    //             <p>
                    //                 <label>
                    //                     Your name:<br />
                    //                     <input type="text" name="name" onChange={this.handleChange} />
                    //                 </label>
                    //             </p>
                    //             <p>
                    //                 <label>
                    //                     Your email:<br />
                    //                     <input type="email" name="email" onChange={this.handleChange} />
                    //                 </label>
                    //             </p>
                    //             <p>
                    //                 <label>
                    //                     Message:<br />
                    //                     <textarea name="message" onChange={this.handleChange} />
                    //                 </label>
                    //             </p>
                    //             <p>
                    //                 <button type="submit">Send</button>
                    //             </p>
                    //         </form>
                    //     </Segment>
                    // </Container>
                }
            </div>
        );
    }
}
