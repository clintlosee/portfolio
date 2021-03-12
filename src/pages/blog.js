import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blogs from '../components/Blogs'

const BlogPage = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => (
  <Layout>
    <section className="blog-page">
      <Blogs title="Blog" posts={blogs} />
    </section>
  </Layout>
)

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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

BlogPage.propTypes = {
  data: PropTypes.object,
}

export default BlogPage
