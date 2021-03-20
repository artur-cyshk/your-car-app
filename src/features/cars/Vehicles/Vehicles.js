import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import List from 'components/List';
import Vehicle from './Vehicle';

import { selectVehicles, getVehicles } from '../carsSlice';

const Vehicles = () => {
  let { make, model } = useParams();
  const dispatch = useDispatch();

  const vehicles = useSelector(state => selectVehicles(state, make, model));
  const areVehiclesFetching = useSelector(state => state.cars.areVehiclesFetching);
  const vehiclesError = useSelector(state => state.cars.vehiclesError);

  const loadVehicles = useCallback(() => {
    if (make && model) {
      dispatch(getVehicles({ make, model }));
    }
  }, [dispatch, make, model]);

  useEffect(() => {
    loadVehicles();
  }, [loadVehicles]);

  return (
    <Section title="Vehicles">
      <List
        items={vehicles}
        isListLoading={areVehiclesFetching}
        renderItem={(vehicle) => <Vehicle key={vehicle.id} vehicle={vehicle} />}
        emptyText="No vehicles found."
        refresh={loadVehicles}
        error={vehiclesError}
      />
    </Section>
  )
};

export default Vehicles;
