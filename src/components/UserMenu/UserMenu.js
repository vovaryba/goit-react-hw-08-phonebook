import React from 'react';
import { Button, Typography, Avatar, SvgIcon } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    borderRadius: 50,
    width: 32,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    padding: 12,
  },
  icon: {
    marginLeft: 5,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <Avatar alt="Green Dragon" src={defaultAvatar} />
      <Typography variant="subtitle1" style={styles.name}>
        Welcome, {name}
      </Typography>
      <Button
        color="inherit"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <Typography variant="subtitle1">Log off</Typography>
        <SvgIcon style={styles.icon}>
          <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
        </SvgIcon>
      </Button>
    </div>
  );
}
