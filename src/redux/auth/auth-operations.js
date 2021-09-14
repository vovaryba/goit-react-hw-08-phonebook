import { createAsyncThunk } from '@reduxjs/toolkit';
import * as registerAPI from 'services/register-api';

const register = createAsyncThunk(
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

const logIn = createAsyncThunk(
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

const logOut = createAsyncThunk(
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

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const token = registerAPI.token;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const refresh = await registerAPI.refresh();
      return refresh;
    } catch (error) {}
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default operations;
