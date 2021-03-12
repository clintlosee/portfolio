import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Title from './Title'
import Blog from './Blog'

export const Blogs = ({ posts, title, showLink }) => (
  <section className="section">
    <Title title={title} />
    <div className="section-center blogs-center">
      {posts.map((blog, index) => (
        <Blog {...blog} index={index} key={blog.id} />
      ))}
    </div>
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
