import PropTypes from 'prop-types';
import { FilterLabel, FilterLabelWrapper, FilterInput } from './Filter.styled';
import { BsSearch } from 'react-icons/bs';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    <FilterLabelWrapper>
      <BsSearch size="16" />
      Find contact by name
    </FilterLabelWrapper>
    <FilterInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="search..."
    ></FilterInput>
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
