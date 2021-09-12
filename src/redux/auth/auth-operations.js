import { createAsyncThunk } from '@reduxjs/toolkit';
import * as registerAPI from 'services/register-api';

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const register = await registerAPI.register(credentials);
      return register;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const login = await registerAPI.login(credentials);
      return login;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const logout = await registerAPI.logout();
      return logout;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const operations = {
  registration,
  logOut,
  logIn,
};

export default operations;
