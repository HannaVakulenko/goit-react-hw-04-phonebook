import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormField,
  Form,
  FormFieldWrapper,
  FieldStyled,
  ErrorMessage,
  BtnForm,
} from './ContactsForm.styled';
import PropTypes from 'prop-types';
import {
  BsFillPersonPlusFill,
  BsPersonFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Required field!'),
  number: Yup.string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required field!'),
});

export const ContactsForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, actions) => {
        onAddContact({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <FormField htmlFor="name">
          <FormFieldWrapper>
            <BsPersonFill size="18" />
            Name
          </FormFieldWrapper>

          <FieldStyled
            tupe="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField htmlFor="number">
          <FormFieldWrapper>
            <BsFillTelephoneFill size="14" />
            Number
          </FormFieldWrapper>

          <FieldStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <BtnForm type="submit">
          <BsFillPersonPlusFill size="16" />
          Add contact
        </BtnForm>
      </Form>
    </Formik>
  );
};

ContactsForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
