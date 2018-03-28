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

const FooterSegment = () => {
    return (
        <Segment inverted vertical style={{ padding: '5em 0 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as="h3" content="Links" />
                            <List link inverted>
                                <List.Item as="a">
                                    <Link className="Home" to="/">
                                        Home
                                    </Link>
                                </List.Item>
                                <List.Item as="a">
                                    <Link className="about" to="/about">
                                        About
                                    </Link>
                                </List.Item>
                                <List.Item as="a">
                                    <Link className="contact" to="/contact">
                                        Contact
                                    </Link>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as="h3" content="Social" />
                            <List link inverted>
                                <List.Item icon="github" content={<a href="https://github.com/clintlosee">GitHub</a>} />
                                <List.Item
                                    icon="linkedin"
                                    content={<a href="https://www.linkedin.com/pub/clint-losee/46/585/a20">Linkedin</a>}
                                />
                                <List.Item
                                    icon="facebook"
                                    content={<a href="https://facebook.com/clint.losee">Facebook</a>}
                                />
                                <List.Item
                                    icon="instagram"
                                    content={<a href="https://instagram.com/clintlosee">Instagram</a>}
                                />
                                <List.Item
                                    icon="twitter"
                                    content={<a href="https://twitter.com/clintlosee">Twitter</a>}
                                />
                            </List>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as="h3" inverted>
                                Let&#39;s Connect
                            </Header>
                            <p>Don&#39;t hesitate to reach out to me. I&#39;d love to chat with you.</p>
                            <Link className="contact" to="/contact">
                                Contact Me
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Segment  inverted textAlign="center">
                                <Divider fitted />
                                <Divider horizontal inverted>
                                    Lovingly Built with React &amp; Gatsby
                                </Divider>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
};

export default FooterSegment;
