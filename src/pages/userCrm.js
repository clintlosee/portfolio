import React from 'react';
import Link from 'gatsby-link';
import {
    Container,
    Header,
    Image,
    Segment,
    Visibility
} from 'semantic-ui-react';

const userCrm = () => (
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
                    content="MEAN STACK APP FOR"
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
                    content="USER CRM MEAN APP"
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'bold',
                        marginBottom: '1em'
                    }}
                />
                <Header
                    as="h2"
                    content="ROLE: DEVELOPER"
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginBottom: '1.5em'
                    }}
                />
            </Container>
        </Segment>

        <section id="works">
            <div class="container">
                <div class="row centered mt mb">
                    <div class="col-lg-8 col-lg-offset-2">
                        <h4>ABOUT THE PROJECT</h4>
                        <hr />
                        <p>
                            This was a personal project to help me learn the
                            MEAN stack and the process of developing a simple
                            app built using MongoDB, Express, Angular, and
                            NodeJS. It is a simple customer relationahip
                            management application that allows you to login and
                            logout, along with adding, editing, and deleting
                            user information. It displays a list of all current
                            users in a simple table that displays the id, name,
                            and username. The site was also built with{' '}
                            <a href="http://getbootstrap.com/" target="_blank">
                                Bootstrap 3
                            </a>{' '}
                            using a material design stylesheet built on top of
                            that.
                        </p>
                        <p>
                            You can test run the site by logging in using the
                            following sample information:<br />
                            <strong>Username:</strong> johndoe<br />
                            <strong>Password:</strong> password
                        </p>
                    </div>
                    <div class="col-lg-10 col-lg-offset-1">
                        <h2>
                            <a
                                href="http://usercrm-closee.herokuapp.com"
                                target="_blank"
                            >
                                <i class="fa fa-link" /> Visit Site
                            </a>
                        </h2>
                    </div>
                    <div class="col-lg-10 col-lg-offset-1 mt">
                        <img
                            class="img-responsive"
                            src="../assets/img/portfolio/full/User-CRM-MEAN-App.png"
                        />
                        <br />
                        <img
                            class="img-responsive"
                            src="../assets/img/portfolio/full/User-CRM-Users-Page.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default userCrm;
