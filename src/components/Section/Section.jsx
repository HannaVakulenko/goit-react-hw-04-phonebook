import { SectionStyled } from './Section.styled';
import { Header } from 'components/Header/Header';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <Header title={title} />
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
