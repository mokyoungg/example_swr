import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    font-size: 40px;
    animation: ${spin} 2s linear infinite;
    display: flex;
    align-self: center;
    color: #4b4b4b;
  }
`;
