import { createSlice } from '@reduxjs/toolkit';
// import authOperations from '../redux/auth/auth-operations';
// import authSelectors from './auth-selectors';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

const authReducer = authSlice.reducer;

export default authReducer;
