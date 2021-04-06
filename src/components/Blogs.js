import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Title from './Title'
import Blog from './Blog'

const BlogsStyles = styled.div`
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }
`

export const Blogs = ({ posts, title, showLink }) => (
  <section className="section">
    <Title title={title} />
    <BlogsStyles className="section-center">
      {posts.map((blog, index) => (
        <Blog {...blog} index={index} key={blog.id} />
      ))}
    </BlogsStyles>
    {showLink && (
      <Link to="/blog" className="btn center-btn">
        blog
      </Link>
    )}
  </section>
)

Blogs.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
}

export default Blogs
