import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const ThanksDiv = styled.div`
  margin-top: 3rem;
`;

const thanks = () => (
  <Layout>
    <ThanksDiv>
      <h1>Thank you!</h1>
      <p>
        Your message has been submitted. I will get back to you as soon as
        possible.
      </p>
    </ThanksDiv>
  </Layout>
);

export default thanks;
