import React, { Component } from 'react';
import WeatherIcon from 'react-icons-weather';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import {
  FaLinkedin,
  FaGithubSquare,
  FaEnvelopeSquare,
  FaFilePdf
} from 'react-icons/fa';
// import { appId } from '../../../keys';
import './welcome.css';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = `&appid=${process.env.GATSBY_WEATHER_API_KEY}`;

const WelcomeButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 3px;
  padding: 15px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 20px 10px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
    background-color: #ff6600;
    border: 2px solid #ff6600;
    color: #fff;
  }

  @media (max-width: 770px) {
    font-size: 28px;
    width: 100%;
    margin-bottom: 2em;
  }
`;

const SocialDiv = styled.div`
  margin: 20px 0;
`;

const styles = {
  weatherIcon: {
    margin: '0 5px'
  }
};

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      loading: true
    };
  }

  componentDidMount() {
    this.getCurrentWeather()
      .then(res => {
        this.setState({ current: res.weather[0], loading: false });
      })
      .catch(err => console.error('Error getting weather data'));
  }

  getCurrentWeather = () => {
    return fetch(`${baseUrl}?q=salt+lake+city${apiKey}`).then(res =>
      res.json()
    );
  };

  renderEmailLink = () => {
    const emailalias = 'closee1@icloud.com';
    return (
      <a href={`mailto:${emailalias}?Subject=Hello%20there!`} target="_top">
        <FaEnvelopeSquare className="i-hov" aria-hidden="true" />
      </a>
    );
  };

  formatWeather = weatherType => {
    let converted = '';
    if (weatherType.toLowerCase().charAt(weatherType.length - 1) === 'y') {
      converted = weatherType.toLowerCase();
    } else if (weatherType.toLowerCase() === 'clear') {
      converted = 'sunny and clear';
    } else if (weatherType.toLowerCase() === 'rain') {
      converted = 'rainy';
    } else if (weatherType.toLowerCase() === 'clouds') {
      converted = 'cloudy';
    } else if (weatherType.toLowerCase() === 'mist') {
      converted = 'misty';
    } else if (weatherType.toLowerCase() === 'smoke') {
      converted = 'smoky';
    } else if (weatherType.toLowerCase() === 'fog') {
      converted = 'foggy';
    } else if (weatherType.toLowerCase() === 'snow') {
      converted = 'snowy';
    } else {
      converted = weatherType;
    }
    return converted;
  };

  render() {
    const { current, loading } = this.state;

    return (
      <div>
        {loading ? (
          'Loading...'
        ) : (
          <div className="welcome section">
            <h1 className="welcome-intro">
              I&#39;m a <strong>front-end software engineer</strong>,{' '}
              <strong>photographer</strong>,{' '}
              <strong>digital media professional</strong>, &amp;{' '}
              <strong>all-around good person </strong>
              living in the {this.formatWeather(current.main)}
              <WeatherIcon
                name="owm"
                iconId={current.id.toString()}
                style={styles.weatherIcon}
              />
              Greater Salt Lake City area.
              <SocialDiv>
                <a
                  href="https://linkedin.com/in/clintlosee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="i-hov" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/clintlosee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="i-hov" aria-hidden="true" />
                </a>
                {this.renderEmailLink()}
              </SocialDiv>
              <a
                href="https://drive.google.com/open?id=1Y9LpmYBXbyJdRx8fm3H5nS2p3sdA_45L"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WelcomeButton className="button resume-button">
                  Resume <FaFilePdf aria-hidden="true" />
                </WelcomeButton>
              </a>
            </h1>
            <img
              src="https://avatars0.githubusercontent.com/u/5192207?v=4"
              className="main-pic"
              alt="Clint Losee"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Welcome;
