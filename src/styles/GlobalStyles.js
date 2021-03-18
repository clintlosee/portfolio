const styled = require('styled-components')

// const GlobalStyles = createGlobalStyle`
const GlobalStyles = styled.createGlobalStyle`
  :root {
    /* primary orange color */
    --clr-primary-1: hsl(24, 100%, 50%);
    --clr-primary-2: hsl(25, 84%, 25%);
    --clr-primary-3: hsl(25, 81%, 29%);
    --clr-primary-4: hsl(24, 77%, 34%);
    --clr-primary-5: #ff6600;
    /* lighter shades of primary orange color */
    --clr-primary-6: hsl(25, 57%, 50%);
    --clr-primary-7: hsl(24, 65%, 59%);
    --clr-primary-8: hsl(24, 80%, 74%);
    --clr-primary-9: hsl(25, 94%, 87%);
    --clr-primary-10: hsl(26, 100%, 94%);

    /* dark shades of primary color*/
    /* --clr-primary-1: hsl(184, 91%, 17%);
      --clr-primary-2: hsl(185, 84%, 25%);
      --clr-primary-3: hsl(185, 81%, 29%);
      --clr-primary-4: hsl(184, 77%, 34%);
      --clr-primary-5: #2caeba; */
    /* lighter shades of primary color */
    /* --clr-primary-6: hsl(185, 57%, 50%);
      --clr-primary-7: hsl(184, 65%, 59%);
      --clr-primary-8: hsl(184, 80%, 74%);
      --clr-primary-9: hsl(185, 94%, 87%);
      --clr-primary-10: hsl(186, 100%, 94%); */
    /* --clr-primary-10: hsl(0, 0%, 90%); grey color */
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    /* --clr-grey-10: hsl(210, 36%, 96%); */
    --clr-grey-10: hsl(0, 0%, 96%);
    --clr-green-dark: hsl(125, 67%, 35%);
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-white: #fff;
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Open Sans', sans-serif;
    --transition: all 0.3s linear;
    /* --spacing: 0.2rem; */
    --spacing: 0.32rem;
    /* --radius: 0.25rem; */
    --radius: 0.4rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 700px;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: var(--ff-secondary);
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 1.6rem;
    margin-top: 8rem;
  }

  .gatsby-image-wrapper img[src*='base64\\,'] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  /* body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--clr-primary-5) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--clr-primary-5);
    border-radius: 2px;
    border: 2px solid var(--white);
  } */

  /* img {
    max-width: 100%;
  } */

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.6rem 1.2rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 1.4rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }

  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }

  .center-btn {
    display: block;
    width: 19.2rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 4.8rem;
  }

  .section {
    padding: 8rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 3.2rem;
      -moz-column-gap: 3.2rem;
      column-gap: 3.2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .underline {
    width: 8rem;
    height: 0.4rem;
    margin-bottom: 2rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .section-title {
    margin-bottom: 6.4rem;
    text-align: center;
  }
  .bg-grey {
    background: var(--clr-grey-10);
  }
`

export default GlobalStyles
