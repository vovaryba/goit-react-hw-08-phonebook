import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Contact from './Contact';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {contacts.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
