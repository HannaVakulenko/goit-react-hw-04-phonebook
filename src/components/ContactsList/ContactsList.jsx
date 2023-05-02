import { DataList, DataItem, BtnDeleteContact } from './ContactsList.styled';
import { MdDeleteForever } from 'react-icons/md';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return contacts.length > 0 ? (
    <DataList>
      {contacts.map(({ name, number, id }) => {
        return (
          <DataItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnDeleteContact type="button" onClick={() => onDeleteContact(id)}>
              <MdDeleteForever size="16" />
              Delete
            </BtnDeleteContact>
          </DataItem>
        );
      })}
    </DataList>
  ) : (
    <Notification message="There is no contacts" />
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
