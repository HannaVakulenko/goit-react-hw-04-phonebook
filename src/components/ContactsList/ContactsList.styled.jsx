import styled from 'styled-components';

export const DataList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 100%;
  width: 400px;
  padding: 24px 0;
`;

export const DataItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 8px 12px;
`;

export const BtnDeleteContact = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.btnPrimary};
  color: ${props => props.theme.colors.btnSecondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus-visible {
    background-color: ${props => props.theme.colors.btnSecondary};
    color: ${props => props.theme.colors.btnPrimary};
  }
`;
