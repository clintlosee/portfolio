import React from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa'

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
  <li key={link.id}>
    <a href={link.url} target="_blank" rel="noreferrer" className="social-link">
      {link.icon}
    </a>
  </li>
))

export default function SocialLinks({ styleClass }) {
  return <ul className={`social-links ${styleClass || ''}`}>{links}</ul>
}
