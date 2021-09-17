import React from 'react';
import { Typography, Button, TextField, Box } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
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
        Login page
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
          <Typography variant="h6">Enter</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default LoginView;
