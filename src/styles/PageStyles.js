import styled from 'styled-components'

const PageStyles = styled.div`
  background: var(--clr-grey-10);
  min-height: calc(100vh - 8rem - 14.4rem);
  border: 10px solid blue;
  .error-page {
    display: grid;
    place-items: center;
    background: var(--clr-primary-10);
    text-align: center;
  }
  .error-page h1 {
    text-transform: uppercase;
    color: var(--clr-primary-1);
    margin-bottom: 3.2rem;
  }
`

export { PageStyles }
