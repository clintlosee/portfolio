import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogStyles = styled.div`
  display: block;
  margin-bottom: 2rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  &:hover {
    box-shadow: var(--dark-shadow);
    transform: scale(1.02);
  }
  article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .blog-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 15rem;
  }
  @media screen and (min-width: 576px) {
    .blog-img {
      height: 28rem;
    }
  }
  @media screen and (min-width: 850px) {
    .blog-img {
      height: 22rem;
    }
  }
`

const BlogCardStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    color: var(--clr-grey-1);
  }
`

const BlogFooterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 0;
    font-weight: bold;
    color: var(--clr-grey-5);
  }
  p:first-of-type {
    display: inline-block;
    background: var(--clr-grey-9);
    color: var(--clr-grey-5);
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`

const Blog = ({ id, title, image, date, category, slug, description }) => (
  <Link to={`/blog/${slug}`} key={id}>
    <BlogStyles className="blog">
      <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        )}
        <BlogCardStyles>
          <h4>{title}</h4>
          <p>{description}</p>
          <BlogFooterStyles>
            <p>{category}</p>
            <p>{date}</p>
          </BlogFooterStyles>
        </BlogCardStyles>
      </article>
    </BlogStyles>
  </Link>
)

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Blog
