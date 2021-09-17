import React from 'react';
import { Typography, Button, TextField, Box } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
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
          onChange={handleChange}
          fullWidth
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <TextField
          id="standard-basic"
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          fullWidth
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <Button color="primary" variant="contained" type="submit">
          <Typography variant="h6">Add contact</Typography>
        </Button>
      </Box>
    </>
  );
}

export default Form;
