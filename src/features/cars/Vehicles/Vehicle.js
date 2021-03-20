import React from 'react';
import PropTypes from 'prop-types';
import styles from './Vehicles.module.css';

const Vehicle = ({ vehicle }) => {
  return (
    <div className={styles.vehicle}>
      <span>{vehicle.make}</span>
      <span>{vehicle.model}</span>
    </div>
  )
};

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired
  }).isRequired,
};

export default Vehicle;
