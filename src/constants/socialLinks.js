import React from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa'
import styled from 'styled-components'

const SocialLinksStyles = styled.ul`
  margin-top: 3.2rem;
  width: 24rem;
  display: flex;
  justify-content: space-between;
`

const SocialLink = styled.li`
  .social-link {
    font-size: 2.8rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .social-link:hover {
    color: var(--clr-primary-5);
  }
`

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com/in/clintlosee/',
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon" />,
    url: 'https://github.com/clintlosee',
  },
  {
    id: 3,
    icon: <FaFacebookSquare className="social-icon" />,
    url: 'https://www.facebook.com/clint.losee',
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon" />,
    url: 'https://www.instagram.com/clintlosee/',
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon" />,
    url: 'https://twitter.com/clintlosee',
  },
]
const links = data.map(link => (
  <SocialLink key={link.id}>
    <a href={link.url} target="_blank" rel="noreferrer" className="social-link">
      {link.icon}
    </a>
  </SocialLink>
))

export default function SocialLinks({ styleClass }) {
  return (
    <SocialLinksStyles className={`social-links ${styleClass || ''}`}>
      {links}
    </SocialLinksStyles>
  )
}
