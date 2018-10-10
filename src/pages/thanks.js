import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const ThanksDiv = styled.div`
  margin-top: 3rem;
`;

export default () => (
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
