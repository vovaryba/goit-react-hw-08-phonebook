import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <li className={s.li}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
      <button className={s.button} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
