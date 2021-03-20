import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ title }) => (
  <header className={styles.carsHeader}>
    <span>{title}</span>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
