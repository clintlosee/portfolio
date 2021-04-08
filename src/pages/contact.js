import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { PageStyles } from '../styles/PageStyles'

const ContactPageStyles = styled.section`
  display: grid;
  place-items: center;
  padding: 8rem 0;
  min-height: calc(100vh - 22.4rem);
`

const ContactFormStyles = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 56rem;
  &:hover {
    box-shadow: var(--dark-shadow);
  }
  h3 {
    padding-top: 2rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1.6rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 1.2rem 2.4rem;
    border: none;
    margin-bottom: 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1.6rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`

const contact = () => (
  <Layout>
    <SEO title="Contact" description="Contact Clint Losee" />
    <PageStyles>
      <ContactPageStyles>
        <ContactFormStyles>
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xgepjeod" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
              <button type="submit" className="submit-btn btn">
                submit
              </button>
            </div>
          </form>
        </ContactFormStyles>
      </ContactPageStyles>
    </PageStyles>
  </Layout>
)

export default contact
