const style = require('styled-components')

const Typography = style.createGlobalStyle`
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 1.2rem;
    font-family: var(--ff-primary);
  }
  h1 {
    font-size: 4.8rem;
  }
  h2 {
    font-size: 3.2rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-3);
  }
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 6.44rem;
    }
    h2 {
      font-size: 4rem;
    }
    h3 {
      font-size: 2.8rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    body {
      font-size: 1.6rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
`

export default Typography
