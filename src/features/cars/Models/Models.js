import React, { useEffect, useCallback } from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Section from 'components/Section';
import List from 'components/List';

import Vehicles from '../Vehicles/Vehicles';

import { getModels, selectModels } from '../carsSlice';
import Model from './Model';

const Models = () => {
  let { make } = useParams();
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  const loadModels = useCallback(() => {
    if (make) {
      dispatch(getModels(make));
    }
  }, [dispatch, make]);

  const models = useSelector(state => selectModels(state, make));
  const areModelsFetching = useSelector(state => state.cars.areModelsFetching);
  const modelsError = useSelector(state => state.cars.modelsError);

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  return (
    <>
      <Section title="Models">
        <List
          items={models}
          isListLoading={areModelsFetching}
          renderItem={(model) => <Model key={model} url={url} model={model} />}
          emptyText="No Models available"
          refresh={loadModels}
          error={modelsError}
        />
      </Section>
      <Route path={`${path}/:model`}>
        <Vehicles/>
      </Route>
    </>
  )
};

export default Models;
