import React from 'react';
import PropTypes from 'prop-types';
import styles from './Vehicles.module.css';

import { GiKeyCard } from 'react-icons/gi';
 
const Vehicle = ({ vehicle }) => {
  return (
    <div className={styles.vehicle}>
      <GiKeyCard className={styles.vehicleIcon} />
      <div className={styles.data}>
        <div className={styles.row}>
          <span className={styles.bodyType}>{vehicle.bodyType}</span>
          <span className={styles.fuelType}>{vehicle.fuelType}</span>
        </div>
        <div className={styles.row}>
          <span>Engine:</span> 
          <span>{vehicle.engineCapacity} cm³ / {vehicle.enginePowerKW} kw / {vehicle.enginePowerPS} ps</span>
        </div>
      </div>
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
