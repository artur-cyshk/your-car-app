import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Models.module.css';

const Model = ({ url, model }) => {
  return (
    <div className={styles.model}>
      <Link to={`${url}/${model}`}>{model}</Link>
    </div>
  )
};

Model.propTypes = {
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default Model;
