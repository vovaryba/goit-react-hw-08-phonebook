import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

const ContactsView = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsView;
