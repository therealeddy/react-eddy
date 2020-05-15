import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;
