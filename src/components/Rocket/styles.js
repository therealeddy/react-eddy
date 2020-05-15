import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: inline-block;
  animation: ${jump} 0.7s ease-in-out infinite;
`;
