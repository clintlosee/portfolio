import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import { PageStyles } from '../styles/PageStyles'

const ErrorPageStyles = styled.main`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 8rem - 14.4rem);
  border: 10px solid blue;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: var(--clr-primary-1);
    margin-bottom: 3.2rem;
  }
`

const Error = () => (
  <Layout>
    <SEO title="404" description="404 Not Found" />
    <ErrorPageStyles className="error-page">
      <div className="error-container">
        <h1>Oops it's a dead end</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </ErrorPageStyles>
  </Layout>
)

export default Error
