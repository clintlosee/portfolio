import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Title from './Title'

const JobContainerStyles = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);
  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 6.4rem;
  }
`

const JobButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6.4rem;
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 2rem;
    letter-spacing: var(--spacing);
    margin: 0 0.8rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.4rem 0;
    line-height: 1;
  }
  .job-btn:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    .job-btn {
      margin-bottom: 1.6rem;
    }
    .active-btn {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
    .job-btn:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }
`

const JobStyles = styled.article`
  h3 {
    font-weight: 400;
  }
  h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.6rem 1.2rem;
    border-radius: var(--radius);
  }
  .job-date {
    letter-spacing: var(--spacing);
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3.2rem;
    align-items: center;
    margin-bottom: 2rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
  .job-icon {
    color: var(--clr-primary-5);
  }
`

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        date
        company
        position
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <JobContainerStyles className="jobs-center">
        <JobButtonStyles className="btn-container">
          {jobs.map((job, index) => (
            <button
              type="button"
              key={job.strapiId}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {job.company}
            </button>
          ))}
        </JobButtonStyles>
        <JobStyles className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </JobStyles>
      </JobContainerStyles>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
