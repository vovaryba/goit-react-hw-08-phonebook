import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function register(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

export async function login(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

export async function logout() {
  const { data } = await axios.post('/users/logout');
  return data;
}
