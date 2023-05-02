import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 24px;
  width: 400px;
`;

export const FilterLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  transition: 0.5s;
  /* outline: none; */
  &:hover {
    background-color: #d9dae0;
  }
`;
