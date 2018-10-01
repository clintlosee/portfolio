import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.5rem;
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/"
          style={{
            color: 'white',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    </HeaderDiv>
)

export default Header
