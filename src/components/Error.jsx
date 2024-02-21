import React from 'react';
import styled from 'styled-components';

const Error = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  background-color: #ffe6e6;
  color: #ff0000;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-weight: bold;
`;

export default Error;
