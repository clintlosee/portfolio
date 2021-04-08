import React from 'react'
import { graphql, Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { PageStyles } from '../styles/PageStyles'

const ComponentName = ({ data }) => {
  const { content, title, description } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      <PageStyles>
        <section className="blog-template">
          <div className="section-center">
            <article className="blog-content">
              <ReactMarkdown source={content} />
            </article>
            <Link to="/blog" className="btn center-btn">
              blog
            </Link>
          </div>
        </section>
      </PageStyles>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default ComponentName
