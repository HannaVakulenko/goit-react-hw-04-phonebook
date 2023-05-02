import styled from 'styled-components';
import {
  Form as FormikForm,
  Field,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  margin: 0 auto;
  width: 400px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FieldStyled = styled(Field)`
  padding: 8px;
  border-radius: 4px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: ${p => p.theme.colors.error};
`;

export const BtnForm = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  height: 36px;
  border-radius: 8px;
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
