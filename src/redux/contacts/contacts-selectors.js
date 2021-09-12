import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
