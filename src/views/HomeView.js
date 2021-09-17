import React from 'react';
import { Typography } from '@material-ui/core';

const styles = {
  container: {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <Typography variant="h1">Welcome page of our service</Typography>
  </div>
);

export default HomeView;
