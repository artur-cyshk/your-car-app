import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';
import { FaCarCrash } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import ListAlert from './ListAlert';

import Spinner from '../Spinner';

const List = ({ isListLoading, items, renderItem, refresh, error, emptyText }) => {
  if (isListLoading) {
    return <Spinner/>;
  }
  if (items?.length === 0) {
    return  (
      <ListAlert
        icon={{
          component: GiHomeGarage,
        }}
        alt="empty-list"
        text={(
          <>
            <span>Garage empty.</span>
            {emptyText && <span>{emptyText}</span>}
            <span>We are working on expanding our database.</span>
          </>
        )}
      />
    );
  }

  if (error) {
    return  (
      <ListAlert
        icon={{
          component: FaCarCrash,
          color: '#e2789a',
        }}
        alt="server-error"
        text={(
          <>
            <span>An error occurred on the server.</span>
            <span> Press <button className={styles.refreshButton} onClick={refresh}>here</button> to try again.</span>
          </>
        )}
      />
    );
  }

  if (items?.length > 0) {
    return (
      <ul className={styles.list}>
        {items.map((item) => renderItem(item, styles.listItem))}
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
