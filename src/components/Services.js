import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import services from '../constants/services'

const ServiceStyles = styled.article`
  background: var(--clr-white);
  padding: 4.8rem 2.4rem;
  margin-bottom: 3.2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  .underline {
    width: 4.8rem;
    height: 0.2rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
  }
  &:hover p {
    color: var(--clr-primary-9);
  }
  &:hover .underline {
    background: var(--clr-primary-9);
  }
`

const Services = () => (
  <section className="section bg-grey">
    <Title title="services" />
    <div className="section-center services-center">
      {services.map(service => {
        const { id, icon, title, text } = service
        return (
          <ServiceStyles key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline" />
            <p>{text}</p>
          </ServiceStyles>
        )
      })}
    </div>
  </section>
)

export default Services
