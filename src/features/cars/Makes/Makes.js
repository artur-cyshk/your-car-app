import React, { useEffect, useCallback } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import List from 'components/List';

import Models from '../Models/Models';
import { getMakes, selectMakes } from '../carsSlice';
import Make from './Make';

const Makes = () => {
  const dispatch = useDispatch();

  const makes = useSelector(selectMakes);
  const areMakesFetching = useSelector(state => state.cars.areMakesFetching);
  const makesError = useSelector(state => state.cars.makesError);

  const loadMakes = useCallback(() => {
    dispatch(getMakes());
  }, [dispatch]);

  useEffect(() => {
    loadMakes();
  }, [loadMakes]);

  return (
    <>
      <Section title="Makes">
        <List
          items={makes}
          isListLoading={areMakesFetching}
          getKey={(make) => make}
          renderItem={(make) => <Make key={make} make={make} />}
          emptyText="No Makes available"
          refresh={loadMakes}
          error={makesError}
        />
      </Section>
      <Route path="/models/:make">
        <Models/>
      </Route>
    </>
  )
};

export default Makes;
