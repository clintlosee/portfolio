import React from 'react';
import Link from 'gatsby-link';
import { Header, Container, Segment, Divider, Progress, Grid } from 'semantic-ui-react';

const styles = {
    container: {
        marginTop: 20,
        marginBottom: 40
    },
    message: {
        marginTop: 40,
        marginBottom: 40
    },
    intro: {
        marginBottom: 20
    }
};

const AboutPage = () => (
    <Container style={styles.container}>
        <Divider horizontal style={styles.message}>
            <Header size="huge">About Me</Header>
        </Divider>

        <Segment raised padded color="orange" textAlign="left" style={styles.intro}>
            <Header size="large" textAlign='center'>Hi, I&#39;m Clint</Header>
            <p>
                I am a Front End Web Developer from Utah with a Bachelor&#39;s Degree in Digital Media with an emphasis
                in Internet Technologies from Utah Valley University. I have been studying in this field for 4+ years.
                Along with my formal schooling I have taken on various freelance projects and additional self-prescribed
                education to help boost my skills in this ever-changing field. With various skills in Internet
                Technologies and digital publishing, along with a strong desire to learn and grow, I&#39;m in search of
                exciting opportunities to help further my knowledge and expertise in the web development world.
            </p>
            <p>
                There is nothing I&#39;m not willing to devote myself to learning. If you have a problem that requires a
                technology that I don&#39;t already have experience with, you can bet I&#39;ll be the first to jump in
                and start learning it. With an almost insatiable appetite for learning new technologies and growing as a
                web developer, you can count on me to help solve your problems.
            </p>
        </Segment>
        <Segment raised padded color="blue" textAlign="center">
            <Header size="large">Skills</Header>
            <Grid>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Segment>
                        <Progress percent={100} attached="top" color="red" />
                        JavaScript/jQuery
                        <Progress percent={100} attached="bottom" color="red" />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Segment>
                        <Progress percent={100} attached="top" color="blue" />
                        React/React Native
                        <Progress percent={100} attached="bottom" color="blue" />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Segment>
                        <Progress percent={100} attached="top" color="yellow" />
                        HTML/CSS
                        <Progress percent={100} attached="bottom" color="yellow" />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Segment>
                        <Progress percent={100} attached="top" color="orange" />
                        Angular
                        <Progress percent={100} attached="bottom" color="orange" />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Segment>
                        <Progress percent={100} attached="top" color="green" />
                        SEO
                        <Progress percent={100} attached="bottom" color="green" />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Segment>
                        <Progress percent={100} attached="top" color="purple" />
                        Photography
                        <Progress percent={100} attached="bottom" color="purple" />
                    </Segment>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                    <Segment>
                        <Progress percent={100} attached="top" color="teal" />
                        Desire To Learn
                        <Progress percent={100} attached="bottom" color="teal" />
                    </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    </Container>
);

export default AboutPage;
