import React from 'react'
import styled from 'styled-components'
import SocialLinks from '../constants/socialLinks'

const FooterStyles = styled.footer`
  height: 14.4rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
  h4 {
    margin-top: 0.8rem;
    color: var(--clr-white);
    font-weight: normal;
    text-transform: uppercase;
  }
  h4 span {
    color: var(--clr-primary-5);
  }
  .footer-links {
    margin: 0 auto 1.6rem auto;
  }
  .social-link {
    color: var(--clr-white);
  }
  .social-link:hover {
    color: var(--clr-primary-5);
  }
`

const Footer = () => (
  <FooterStyles className="footer">
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>
        copyright &copy;{new Date().getFullYear()}
        <span> Clint Losee</span> all rights reserved
      </h4>
    </div>
  </FooterStyles>
)

export default Footer
