import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactShelfAPI from 'services/contactshelf-api';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await contactShelfAPI.addContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactShelfAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await contactShelfAPI.deleteContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
