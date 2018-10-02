import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { Welcome } from '../components/Welcome'

const IndexPage = () => (
  <Layout>
    <Welcome />
    <h1>Hi people!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about/">Go to about</Link>
    <Link to="/welcome/">Go to welcome</Link>
  </Layout>
)

export default IndexPage
