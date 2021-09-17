import React from 'react';
import { Typography, Button, TextField, Box } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        width: 1200,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography
        sx={{
          marginTop: 2,
        }}
        variant="h3"
      >
        Registration page
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
        />

        <TextField
          id="standard-basic"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          fullWidth
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={() => dispatch(authOperations.logOut())}
        >
          <Typography variant="h6">Register</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterView;
