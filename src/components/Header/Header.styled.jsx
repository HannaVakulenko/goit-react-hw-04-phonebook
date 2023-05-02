import styled from 'styled-components';

export const HeaderStyled = styled.h2`
  margin: 0 auto;
  padding: 20px 0;
  font-size: ${props => props.theme.fontSizes.l};
  text-align: center;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.boxShadowHeader};
  margin-left: -16px;
  margin-right: -16px;
  line-height: ${props => props.theme.lineHeights.heading};
`;
