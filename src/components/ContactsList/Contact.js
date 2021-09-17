import React from 'react';
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  SvgIcon,
} from '@material-ui/core';
import PropTypes from 'prop-types';
// import s from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon>
          <SvgIcon>
            <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
          </SvgIcon>
        </ListItemIcon>
        <Typography>
          {name}: {number}
        </Typography>
        <Button
          sx={{
            marginLeft: 4,
          }}
          color="error"
          variant="text"
          type="button"
          startIcon={
            <SvgIcon>
              <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
            </SvgIcon>
          }
          onClick={onDeleteContact}
        >
          <Typography>Delete</Typography>
        </Button>
      </ListItem>
    </List>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
