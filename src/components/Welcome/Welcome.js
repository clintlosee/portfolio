import React, { Component } from 'react';
import WeatherIcon from 'react-icons-weather';
import styled from 'styled-components';
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare, FaFilePdf } from 'react-icons/fa';
import { appId } from '../../../keys';
import './welcome.css';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = `&appid=${appId}`;

const WelcomeButton = styled.button`
  font-family: "Montserrat", sans-serif;
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
  }
`;

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
        console.log(this.state.current);
      })
      .catch(err => console.error('Error getting weather data'));
  }

  getCurrentWeather = () => {
    return fetch(`${baseUrl}?q=salt+lake+city${apiKey}`).then(res =>
      res.json()
    );
  };

  formatWeather = weatherType => {
    let converted = '';
    if (weatherType.toLowerCase().charAt(weatherType.length - 1) === 'y') {
      converted = weatherType.toLowerCase();
    } else if (weatherType.toLowerCase() === 'clear') {
      converted = 'sunny and clear';
    } else if (weatherType.toLowerCase() === 'raining') {
      converted = 'rainy';
    } else if (weatherType.toLowerCase() === 'clouds') {
      converted = 'cloudy';
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
              I&#39;m a <strong>front-end web developer</strong>,{' '}
              <strong>photographer</strong>,{' '}
              <strong>digital media professional</strong>, &amp;{' '}
              <strong>all-around good person </strong>
              living in the {this.formatWeather(current.main)}{' '}
              <WeatherIcon
                name="owm"
                iconId={current.id.toString()}
                className="weatherIcon"
              />{' '}
              Salt Lake City area.
              <br />
              <br />
              <a
                href="https://linkedin.com/in/clintlosee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="i-hov"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/clintlosee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare
                  className="i-hov"
                  aria-hidden="true"
                />
              </a>
              <a
                href="mailto:email@gmail.com?Subject=Hello%20there!"
                target="_top"
              >
                <FaEnvelopeSquare
                  className="i-hov"
                  aria-hidden="true"
                />
              </a>
              <br />
              <a href="/" target="_blank" rel="noopener noreferrer">
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
