import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
    Button,
    Card,
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
import portfolioItems from '../components/portfolioItems';

const style = {
    h1: {
        marginTop: '3em'
    },
    h2: {
        margin: '4em 0em 2em'
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em'
    },
    last: {
        marginBottom: '300px'
    },
    header: {
        fontSize: '2.5em',
        margin: '1em'
    }
};

class IndexPage extends Component {
    renderPortfolio() {
        return portfolioItems.map(item => {
            return (
                <Grid.Column key={item.header}>
                    <Segment>
                        <Card fluid as="a" href={item.link} target={item.target}>
                            <Image src={item.image} style={{ marginBottom: 0 }} />
                            <Card.Content>
                                <Card.Header>{item.header}</Card.Header>
                                <Card.Meta>Technologies: {item.tech}</Card.Meta>
                                <Card.Description>{item.description}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment>
                </Grid.Column>
            );
        });
    }

    render() {
        return (
            <div>
                <Segment
                    textAlign="center"
                    style={{
                        minHeight: 500,
                        padding: '1em 0em',
                        background: 'url(/static/assets/images/back.jpg)',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center top',
                        backgroundSize: 'cover'
                    }}
                    vertical
                >
                    <Container
                        text
                        style={{
                            position: 'absolute',
                            zIndex: 9999,
                            left: 0,
                            right: 0
                        }}
                    >
                        <Header
                            as="h6"
                            content="Hello, my name is"
                            inverted
                            style={{
                                fontSize: '1.5em',
                                fontWeight: 'normal',
                                marginTop: '3.5em',
                                marginBottom: '2em'
                            }}
                        />
                        <Header
                            as="h1"
                            content="CLINT LOSEE"
                            inverted
                            style={{
                                fontSize: '4em',
                                fontWeight: 'bold',
                                marginBottom: '1em'
                            }}
                        />
                        <Header
                            as="h2"
                            content="Web Developer &amp; Digital Media Professional"
                            inverted
                            style={{
                                fontSize: '1.7em',
                                fontWeight: 'normal',
                                marginBottom: '1.5em'
                            }}
                        />
                        <Button
                            inverted
                            size="huge"
                            as="a"
                            href="https://drive.google.com/open?id=1Y9LpmYBXbyJdRx8fm3H5nS2p3sdA_45L"
                            target="_blank"
                        >
                            <Icon name="download" /> Resume
                        </Button>
                    </Container>
                </Segment>

                {
                    // <Segment style={{ padding: '0em' }} vertical>
                    //     <Grid celled="internally" columns="equal" stackable>
                    //         <Grid.Row textAlign="center">
                    //             <Grid.Column
                    //                 style={{
                    //                     paddingBottom: '5em',
                    //                     paddingTop: '5em'
                    //                 }}
                    //             >
                    //                 <Header as="h3" style={{ fontSize: '2em' }}>
                    //                     "What a Company"
                    //                 </Header>
                    //                 <p style={{ fontSize: '1.33em' }}>
                    //                     That is what they all say about us
                    //                 </p>
                    //             </Grid.Column>
                    //             <Grid.Column
                    //                 style={{
                    //                     paddingBottom: '5em',
                    //                     paddingTop: '5em'
                    //                 }}
                    //             >
                    //                 <Header as="h3" style={{ fontSize: '2em' }}>
                    //                     "I shouldn't have gone with their
                    //                     competitor."
                    //                 </Header>
                    //                 <p style={{ fontSize: '1.33em' }}>
                    //                     <Image
                    //                         avatar
                    //                         src="/assets/images/avatar/large/nan.jpg"
                    //                     />
                    //                     <b>Nan</b> Chief Fun Officer Acme Toys
                    //                 </p>
                    //             </Grid.Column>
                    //         </Grid.Row>
                    //     </Grid>
                    // </Segment>
                }

                <Segment basic>
                    <Header as="h2" content="Portfolio" style={style.header} textAlign="center" />
                    <Grid columns={3} stackable>
                        {this.renderPortfolio()}
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default IndexPage;
