import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Title from '../components/Title'
import SEO from '../components/SEO'
import { PageStyles } from '../styles/PageStyles'

const AboutPageStyles = styled.section`
  padding: 11.2rem 0;
  .about-img {
    margin-bottom: 3.2rem;
    height: 40rem;
  }
  .about-text .section-title {
    margin-bottom: 3.2rem;
    text-align: left;
  }
  .about-text .underline {
    margin-left: 0;
    margin-right: 0;
  }
  .about-text p {
    line-height: 2;
  }
  .about-stack span {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.36rem;
  }
  .about-stack span {
    margin-top: 0.8rem;
  }
  .stack-container {
    width: 48rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.8rem;
  }
  .stack-container span {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: var(--clr-grey-4);
  }
  .stack-icon {
    color: var(--clr-primary-5);
    margin-right: 0.4rem;
    font-size: 1.6rem;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 6.4rem;
    }
    .about-img {
      grid-column: 1 / span 5;
      margin-bottom: 0;
    }
    .about-text {
      grid-column: 6 / -1;
    }
  }
`

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, info, stack, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="About Clint Losee" />
      <PageStyles>
        <AboutPageStyles>
          <div className="section-center about-center">
            {image && (
              <Image
                fluid={image.childImageSharp.fluid}
                className="about-img"
              />
            )}
            <article className="about-text">
              <Title title={title} />
              <ReactMarkdown source={info} />

              <div className="about-stack">
                <h3>Skills</h3>
                {stack.map(item => (
                  <span key={item.id}>{item.title}</span>
                ))}
              </div>
            </article>
          </div>
        </AboutPageStyles>
      </PageStyles>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        info
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

About.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.object,
  stack: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.object,
}

export default About
