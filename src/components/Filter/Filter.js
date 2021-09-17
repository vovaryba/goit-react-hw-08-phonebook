import React from 'react';
import { TextField, InputAdornment, SvgIcon } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsActions } from 'redux/contacts';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const change = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <TextField
      value={value}
      onChange={change}
      type="text"
      name="name"
      label="Find contacts by name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </SvgIcon>
          </InputAdornment>
        ),
      }}
      variant="standard"
      fullWidth
    />
  );
};

export default Filter;
