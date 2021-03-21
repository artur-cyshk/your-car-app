import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './SearchInput.module.css';

const SearchInput = ({ onSearch, placeholder }) => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder={placeholder} onChange={(e) => onSearch(e.target.value)} />
      <BiSearchAlt className={styles.icon}/>
    </div>
    
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchInput;
