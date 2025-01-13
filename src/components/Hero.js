import React from 'react'
import Image from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import SocialLinks from '../constants/socialLinks'

const query = graphql`
  {
    file(relativePath: { eq: "hero-img1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HeroStyles = styled.header`
  margin-top: -8rem;
  padding-top: 8rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;

  .hero-center {
    height: 100%;
    display: grid;
    align-items: center;
  }

  .underline {
    margin-bottom: 0.8rem;
    margin-left: 0;
  }
  .hero-info {
    background: var(--clr-primary-10);
  }
  .hero-img {
    display: none;
  }
  .hero-info h4 {
    color: var(--clr-grey-5);
  }
  .hero-icons {
    justify-items: flex-start;
  }
  .btn {
    margin-top: 2rem;
  }

  @media screen and (min-width: 992px) {
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }
    .hero-center {
      grid-template-columns: repeat(12, 1fr);
    }

    h4 {
      font-size: 1.4rem;
    }
    .hero-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }
    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }
  @media screen and (min-width: 1170px) {
    h4 {
      font-size: 1.6rem;
    }

    .hero-info {
      grid-column: 1 / span 8;
    }

    h4 {
      line-height: 1;
    }
  }
`

const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp: { fluid },
  //   },
  // } = useStaticQuery(query)
  // console.log('fluid:', fluid)

  const fluid = {
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVQ4y31Ua0yTZxQ+7dfBBARpgUJb5GLFZZfIIopTZ2AgHdemwgArAVpoSy9IgRUUpm6gqCDxkk0TZ4bXTCHLNn8tccxU41y26cbYQjRjS9RlQ8NQZxCwfZ99/bhJdDt/znnfc85znu+c7z1ET4jHwgl61B5AXrOImJlEXotYPGH1F/M+sXDm78etfnPinxI+iWCass0iXxJHAP2X8EASHlw8bvUXzowv8gTY7AGVNKckVlMYMugV5NJKZPL6NZLN8RtI/NgiEU2CEo3b+AJXrMsmneUkFgpUUAhKqX7MFnjxRtPqe9/sNXndB96Ge4/Z29ecNvLAIXOjjFqYiV5+grGQC/Mss8mLUsrwmuj2wE4tjnUdQ9vpXjg6TqJ0cydq9p9F2xk3Dnedxk+7CsEDevm8E/ftodKpVoknwWw0jZ4y5ozAqYPtqD9+aaL5eK8nq8DANq5awfYXp7OipMXM3rSbvXfyKw/vf3xmbzNDLQe+9/2PbIGy6f7P9KO/PPRKntUFdfWR8eX2DrxYtpUVaXJZb2sLGz57CBffNbD09HUs0b6PJVt2sHjbIbbDoBnDJsKEmTsqkDJNzQBWikjSFT2kDCcozchIY2W0tozZSwzM3d4Kd8d2jPS0YrNRxyilEpReyeiNCuaXafbeNIUAFvrjlmn+7MAkKfpltHajl0srg1jDB2s3scAsCxqKinHKbsSXzTbc2FeNwZ1GKLL4gpkW+Gf6QM3saGE8UEWPhiqeXzI7f50zXZxTBdGbJibKMjPKdTBJpgnbijeg21yGy1vMuHPAgcOuclC2HZzWziRaG6O8Om/DxjU+hiO3K4NiZxkW1qlEBc6HlGeDKKeKSdbXMMqoZIkZWhzUa3Gu3oRbu/KwnWdK613g3nKy59Y7GOlcngb9Kh/DHyj7wuSUFTUdghFU4uoK0NeD01knuPxqkLaK+eeZ4SwqRLdBg1/3lWLw8hdQZ20ApynhwaygVMPE7pJEwE6NUz83R4lGpzDqFKtLlVxR8/fCfAOiCq2egJUaSBcvZ6fOnMeJ9nZc//4q+n/sw2JVLAsNCccGe6On4oPT2F+69CqayW/Oq4srqRHGHZZTqtO88z6qW49gflCkRypdiI8/vcQKKraxnnNudO7pYCHBch8g++hoN0bvjXqGv/38VV/uP193T/4yoYbNgv7u2m3hov8msx7+8DMskMXAb55sovPASW+JrY3VNh1kqanZkMpULFIeM3b+wjX8NfSgR8j55JiwTHzvmWK1egHw9cY9JPEPE/qpL6/RyRUJdwODo5CrMyA1v96bkJTnUSnjPVEKtTdapUZXV8+fAGJ88YO/DYnmrKMVdZ2C3nrhZ3ohpVgAlUbEy8Mi4vaGydW/R6jXQBGbCIUiDgqlGjHR6l5NhjbBF1dXu0WIvz98d+6O6xu4M2NbHM0zayxcHhMcIl+SrFIuKohSqvOVKnXitK+pqUUA+2Xg1rMXZ3ikmqThcdO2aIFs4TNXcpQynoxGhwDmL5lH1weH6H8lXL6IFiheEuywiHiRLHqpWKFK4KIUizilUi3mP1nw8Wyfyv0X6LsQMPWCeoIAAAAASUVORK5CYII=',
    aspectRatio: 1,
    src: '/static/15c58e198afcc1b1033d392d09dd7a94/ee604/hero-img1.png',
    srcSet:
      '/static/15c58e198afcc1b1033d392d09dd7a94/69585/hero-img1.png 200w,\n/static/15c58e198afcc1b1033d392d09dd7a94/497c6/hero-img1.png 400w,\n/static/15c58e198afcc1b1033d392d09dd7a94/ee604/hero-img1.png 800w,\n/static/15c58e198afcc1b1033d392d09dd7a94/f3583/hero-img1.png 1200w,\n/static/15c58e198afcc1b1033d392d09dd7a94/5707d/hero-img1.png 1600w,\n/static/15c58e198afcc1b1033d392d09dd7a94/90136/hero-img1.png 1952w',
    sizes: '(max-width: 800px) 100vw, 800px',
  }

  return (
    <HeroStyles>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>I'm Clint</h1>
            <h4>frontend web engineer</h4>
            {/* <Link to="/contact" className="btn">
              contact me
            </Link> */}
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </HeroStyles>
  )
}

export default Hero
