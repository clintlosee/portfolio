import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import Title from '../components/Title'
import SEO from '../components/SEO'

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, info, stack, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="About Clint Losee" />
      <section className="about-page">
        <div className="section-center about-center">
          {image && (
            <Image fluid={image.childImageSharp.fluid} className="about-img" />
          )}
          <article className="about-text">
            <Title title={title} />
            <ReactMarkdown source={info} />

            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
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
