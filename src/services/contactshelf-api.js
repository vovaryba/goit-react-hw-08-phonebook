import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactId) {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
}

export async function register(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}
