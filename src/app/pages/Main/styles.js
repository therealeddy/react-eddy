import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 40px;
  color: ${props => (props.error ? 'red' : 'white')};
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 25%;
  transform: translateY(-50%);
`;
