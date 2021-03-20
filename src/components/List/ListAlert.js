import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

const ListAlert = ({ icon, text }) => {
  const IconComponent = icon.component;
  return (
    <div className={styles.info}>
      <IconComponent size="50" color={icon.color || '#948bc3'} />
      <p>{text}</p>
    </div>
  );
}

ListAlert.propTypes = {
  icon: PropTypes.shape({
    color: PropTypes.string,
    component: PropTypes.func.isRequired,
  }),
  text: PropTypes.node.isRequired,
}

export default ListAlert;
