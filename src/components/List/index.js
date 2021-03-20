import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';
import refreshIcon from './refresh.svg';

import Spinner from '../Spinner';

const List = ({ isListLoading, items, renderItem, refresh, error, emptyText }) => {
  if (isListLoading) {
    return <Spinner/>;
  }
  if (items?.length === 0) {
    return <span>{emptyText || 'List is empty'}</span>;
  }

  if (error) {
    return <img src={refreshIcon} alt="refresh" onClick={refresh}/>
  }

  if (items?.length > 0) {
    return (
      <ul className={styles.list}>
        {items.map(renderItem)}
      </ul>
    )
  }

  return null;
};

List.propTypes = {
  isListLoading: PropTypes.bool.isRequired,
  items: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
  error: PropTypes.object,
  emptyText: PropTypes.string,
};

export default List;
