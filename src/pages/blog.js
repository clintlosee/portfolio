import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Blogs from '../components/Blogs'
import SEO from '../components/SEO'
import { PageStyles } from '../styles/PageStyles'
import data from '../json/data.json'

const BlogPageStyles = styled.section`
  .blog {
    background: var(--clr-white);
  }
`

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" description="Clint Losee Dev Blog" />
    <PageStyles>
      <BlogPageStyles className="blog-page1">
        <Blogs title="Blog" posts={data.allStrapiBlogs.nodes} />
      </BlogPageStyles>
    </PageStyles>
  </Layout>
)

// export const query = graphql`
//   {
//     allStrapiBlogs {
//       nodes {
//         slug
//         description
//         date(formatString: "MMMM Do, YYYY")
//         id
//         title
//         category
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// BlogPage.propTypes = {
//   data: PropTypes.object,
// }

export default BlogPage
