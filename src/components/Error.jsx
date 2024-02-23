import React from 'react';
import styled from 'styled-components';

const Error = ({ message }) => {
  return (
    <ErrorWrapper>
      <ErrorMessage>
        <h1>404</h1>
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404"/>
        <h4>Look like you're lost</h4>
        <p>{message}</p>
      </ErrorMessage>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
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
