import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Makes.module.css';

const Make = ({ make }) => {
  return (
    <div className={styles.make}>
      <Link to={`/models/${make}`}>{make}</Link>
    </div>
  )
};

Make.propTypes = {
  make: PropTypes.string.isRequired,
};

export default Make;
