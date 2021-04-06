import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import { PageStyles } from '../styles/PageStyles'

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => (
  <Layout>
    <SEO title="Projects" description="Clint Losee Dev Projects" />
    <PageStyles>
      <section className="projects-page">
        <Projects title="All Projects" projects={projects} />
      </section>
    </PageStyles>
  </Layout>
)

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        url
        github
        description
        stack {
          id
          title
        }
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

ProjectsPage.propTypes = {
  data: PropTypes.object,
}

export default ProjectsPage
