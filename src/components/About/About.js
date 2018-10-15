import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/fa';
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

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      loading: true
    };
  }

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
            from Utah Valley University. I have been studying in this field for
            4+ years and working professionally now for over 3 years. Along with
            my formal schooling I have taken on various freelance projects and
            additional self-prescribed education to help boost my skills in this
            ever-changing field. With various skills in Internet Technologies
            and digital publishing, along with a strong desire to learn and
            grow, I&#39;m in search of exciting opportunities to help further my
            knowledge and expertise in the web development world.
          </AboutText>
          <AboutText>
            There is nothing I&#39;m not willing to devote myself to learning.
            If you have a problem that requires a technology that I don&#39;t
            already have experience with, you can bet I&#39;ll be the first to
            jump in and start learning it. With an almost insatiable appetite
            for learning new technologies and growing as a web developer, you
            can count on me to help solve your problems.
          </AboutText>
        </div>
      </AboutDiv>
    );
  }
}

export default About;
