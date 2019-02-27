import React, { Component } from 'react';
import {
  FaCss3,
  FaNode,
  FaWordpress,
  FaReact,
  FaVuejs,
  FaSass,
  FaGithubAlt,
  FaSearch,
} from 'react-icons/fa';
import { Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import './about.css';

const AboutDiv = styled.div`
  margin-top: 5rem;
  @media (max-width: 770px) {
    margin-top: 3rem;
  }
`;

const AboutText = styled.p`
  font-size: 2rem;
  text-align: justify;
`;

const HeaderSpan = styled.span`
  font-size: 1.5rem;
`;

const ListItem = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem !important;
  margin: 15px;
  text-align: center;

  svg {
    font-size: 5rem !important;
    height: 1.5em;
  }
`;

const ListItemRN = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem !important;
  margin: 15px;
  text-align: center;

  svg {
    font-size: 5rem !important;
    height: 6rem;
  }
`;

const ListItemNode = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem !important;
  margin: 15px;
  text-align: center;

  svg {
    font-size: 8rem !important;
    height: 6rem;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutDiv>
        <div className="about section about-section">
          <Divider horizontal style={{ marginBottom: '40px' }}>
            <Header size="huge">About Me</Header>
            <HeaderSpan>Hi, I&#39;m Clint</HeaderSpan>
          </Divider>

          <AboutText>
            I am a Front End Software Engineer from Utah with a Bachelor&#39;s
            Degree in Digital Media with an emphasis in Internet Technologies
            from Utah Valley University. I focus primarily on Front-End
            JavaScript development, but I also love figuring out what I can do
            with server-side NodeJS. I have been studying in this field for over
            6 years and working professionally now for over 3 years. Along with
            my formal schooling I have taken on various freelance projects and
            additional self-prescribed educational projects to help boost my
            skills in this ever-changing field. With various skills in Internet
            Technologies along with a strong desire to learn and grow, I&#39;m
            in search of exciting opportunities to help further my knowledge and
            expertise in the web development world.
          </AboutText>
          <AboutText>
            There is nothing I&#39;m not willing to devote myself to learning.
            If you have a problem that requires a technology that I don&#39;t
            already have experience with, you can bet I&#39;ll be the first to
            jump in and start learning it. With an almost insatiable appetite
            for learning new technologies and growing as a web developer, you
            can count on me to help solve your problems.
          </AboutText>

          <AboutText>
            Skills and technologies I have worked with include:
          </AboutText>

          <div role="list" className="ui horizontal list">
            <ListItem role="listitem" className="item">
              <FaVuejs className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">VueJS</div>
              </div>
            </ListItem>
            <ListItemRN role="listitem" className="item">
              <FaReact className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header rn">
                  React &amp;
                  <br /> React Native
                </div>
              </div>
            </ListItemRN>
            <ListItemNode role="listitem" className="item">
              <FaNode className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">NodeJS</div>
              </div>
            </ListItemNode>
            <ListItem role="listitem" className="item">
              <FaCss3 className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">CSS3</div>
              </div>
            </ListItem>
            <ListItem role="listitem" className="item">
              <FaSass className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">Sass</div>
              </div>
            </ListItem>
            <ListItem role="listitem" className="item">
              <FaWordpress className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">WordPress</div>
              </div>
            </ListItem>
            <ListItem role="listitem" className="item">
              <FaGithubAlt className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">Git</div>
              </div>
            </ListItem>
            <ListItem role="listitem" className="item">
              <FaSearch className="i-hov" aria-hidden="true" />
              <div className="content">
                <div className="header">SEO</div>
              </div>
            </ListItem>
          </div>
        </div>
      </AboutDiv>
    );
  }
}

export default About;
