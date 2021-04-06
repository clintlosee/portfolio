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
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <HeroStyles>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>I'm Clint</h1>
            <h4>frontend web engineer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </HeroStyles>
  )
}

export default Hero
