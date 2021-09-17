import React from 'react';
import { Typography, SvgIcon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const styles = {
  nav: {
    display: 'flex',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    fontWeight: 700,
    color: '#FFFFFF',
  },
  activeLink: {
    color: '#000000  ',
  },
  icon: {
    marginRight: 5,
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav style={styles.nav}>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        <SvgIcon style={styles.icon}>
          <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </SvgIcon>
        <Typography variant="h6">Home</Typography>
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <SvgIcon style={styles.icon}>
            <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z" />
          </SvgIcon>
          <Typography variant="h6">Contacts</Typography>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
