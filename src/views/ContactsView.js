import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

const ContactsView = () => {
  return (
    <Box
      sx={{
        width: 1200,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Form />
      <Typography
        sx={{
          marginTop: 5,
        }}
        variant="h3"
      >
        Contacts
      </Typography>
      <Box
        sx={{
          '& > :not(style)': { marginTop: 2 },
          width: 400,
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Filter />
        <ContactsList />
      </Box>
    </Box>
  );
};

export default ContactsView;
