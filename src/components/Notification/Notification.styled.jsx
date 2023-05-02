import styled from 'styled-components';

export const Message = styled.p`
  margin: 32px auto;
  padding: 24px 0;
  text-align: center;
  background-color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.fontSizes.l};
`;
