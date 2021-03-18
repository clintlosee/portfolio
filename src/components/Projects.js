import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Title from './Title'
import Project from './Project'

const ProjectsStyles = styled.section`
  background: var(--clr-grey-10);
`

const Projects = ({ projects, title, showLink }) => (
  <ProjectsStyles className="section projects">
    <Title title={title} />
    <div className="section-center projects-center">
      {projects.map((project, index) => (
        <Project {...project} index={index} key={project.id} />
      ))}
    </div>
    {showLink && (
      <Link to="/projects" className="btn center-btn">
        projects
      </Link>
    )}
  </ProjectsStyles>
)

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
}

export default Projects
