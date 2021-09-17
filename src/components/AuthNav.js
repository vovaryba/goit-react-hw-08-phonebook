import React from 'react';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const styles = {
  authnav: {
    display: 'flex',
  },
  link: {
    padding: 12,
    fontWeight: 700,
    color: '#FFFFFF',
  },
  activeLink: {
    color: '#000000',
  },
};

export default function AuthNav() {
  return (
    <div style={styles.authnav}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <Typography variant="h6">Registration</Typography>
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <Typography variant="h6">Login</Typography>
      </NavLink>
    </div>
  );
}
