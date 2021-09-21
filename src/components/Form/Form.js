import React, { useState, useEffect } from 'react';
import { Typography, Button, TextField, Box } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState('Name is a required field');
  const [numberError, setNumberError] = useState('Number is a required field');
  const [formValid, setFormValid] = useState(false);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nameError || numberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, numberError]);

  const nameHandler = e => {
    setName(e.target.value);
    const re = /^([^0-9]*)$/;
    if (e.target.value.length < 1 || !re.test(String(e.target.value))) {
      setNameError('Name should not contain numbers');
      if (!e.target.value) {
        setNameError('Name is a required field');
      }
    } else {
      setNameError('');
    }
  };

  const numberHandler = e => {
    setNumber(e.target.value);
    const re = /^([0-9]*)$/;
    if (e.target.value.length < 6 || !re.test(Number(e.target.value))) {
      setNumberError(
        'The number should consist only of numbers and have at least six digits',
      );
      if (!e.target.value) {
        setNumberError('Number is a required field');
      }
    } else {
      setNumberError('');
    }
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;

      case 'number':
        setNumberDirty(true);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactCoincide = contacts.find(
      prevContact => prevContact.name === name,
    );
    if (contactCoincide) {
      alert(`${contactCoincide.name} is already in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact({ id: uuid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Typography
        sx={{
          marginTop: 2,
        }}
        variant="h3"
      >
        Phonebook
      </Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { marginTop: 2 },
          width: 400,
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={e => nameHandler(e)}
          onBlur={e => blurHandler(e)}
          fullWidth
          required
          error={nameDirty && nameError}
          helperText={nameDirty && nameError}
        />

        <TextField
          id="standard-basic"
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={e => numberHandler(e)}
          onBlur={e => blurHandler(e)}
          fullWidth
          required
          error={numberDirty && numberError}
          helperText={numberDirty && numberError}
        />

        <Button
          disabled={!formValid}
          color="primary"
          variant="contained"
          type="submit"
        >
          <Typography variant="h6">Add contact</Typography>
        </Button>
      </Box>
    </>
  );
}

export default Form;
