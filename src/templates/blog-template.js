import React from 'react'
import { graphql, Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { PageStyles } from '../styles/PageStyles'

const BlogTemplateStyles = styled.section`
  padding: 8rem 0;
  h1,
  h2 {
    text-align: center;
  }
  ul {
    margin-top: 3.2rem;
    display: inline-block;
  }
  ul li {
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    padding: 0.8rem 1.6rem;
    margin: 1.6rem 0;
    text-transform: uppercase;
  }

  blockquote {
    background: var(--clr-primary-9);
    border-radius: var(--radius);
    padding: 1.6rem;
    line-height: 2;
    color: var(--clr-primary-5);
    margin: 3.2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1.6rem 2.4rem;
    border-radius: var(--radius);
  }
  img {
    width: 24rem;
    height: 24rem;
    margin: 4.8rem 0;
  }
`

const ComponentName = ({ data }) => {
  const { content, title, description } = data.blog

  return (
    <Layout>
      <SEO title={title} description={description} />
      <PageStyles>
        <BlogTemplateStyles className="blog-template">
          <div className="section-center">
            <article className="blog-content">
              <ReactMarkdown source={content} />
            </article>
            <Link to="/blog" className="btn center-btn">
              blog
            </Link>
          </div>
        </BlogTemplateStyles>
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
