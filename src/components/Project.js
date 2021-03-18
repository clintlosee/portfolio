import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import styled from 'styled-components'

const ProjectStyles = styled.article`
  display: grid;
  margin-bottom: 6.4rem;
  .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 30.4rem;
    z-index: 1;
  }
  .project-img::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
    opacity: 0.85;
    transition: var(--transition);
  }
  &:hover .project-img::after {
    opacity: 0;
  }
  .project-info {
    background: var(--clr-white);
    padding: 1.6rem 3.2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .project-number {
    display: inline-block;
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.2rem;
  }
  .project-info h3 {
    font-weight: 500;
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    text-transform: uppercase;
  }
  .project-desc {
    word-spacing: 15px;
    color: var(--clr-grey-3);
  }
  .project-stack {
    margin-bottom: 1.6rem;
  }
  .project-stack span,
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
  .project-icon {
    color: var(--clr-primary-5);
    font-size: 2rem;
    margin-right: 0.8rem;
    transition: var(--transition);
  }
  .project-icon:hover {
    color: var(--clr-primary-1);
  }
  @media screen and (min-width: 576px) {
    .project-img {
      height: 30.4rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 35.2rem;
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    .project-img {
      grid-column: 1 / span 8;
      grid-row: 1 / 1;
      height: 48rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    &:nth-of-type(even) .project-img {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    &:nth-of-type(even) .project-info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`

const Project = ({ description, title, github, url, stack, image, index }) => (
  <ProjectStyles className="project">
    {image && (
      <Image fluid={image?.childImageSharp?.fluid} className="project-img" />
    )}
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title || 'Default Title'}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map(item => (
          <span key={item.id} className="">
            {item.title}
          </span>
        ))}
      </div>
      <div className="project-links">
        {github && (
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
        )}
        {url && (
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        )}
      </div>
    </div>
  </ProjectStyles>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number,
}

export default Project
