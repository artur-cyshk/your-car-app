import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMakes, fetchModels, fetchVehicles } from './cars.service';

export const selectMakes = (state) => state.cars.makes;

export const selectModels = (state, make) => {
  return state.cars.makes[make];
};

export const selectVehicles = (state, make, model) => {
  const models = state.cars.models[make] ?? {};
  return models[model];
};

const getMakes = createAsyncThunk(
  'cars/makes',
  fetchMakes,
);

const getModels = createAsyncThunk(
  'cars/models',
  async (make, { getState }) => {
    const storedModels = selectModels(getState(), make);
    if (storedModels) {
      return { make, models: storedModels };
    }
    const models = await fetchModels(make);
    return {
      make,
      models,
    };
  },
);

const getVehicles = createAsyncThunk(
  'cars/vehicles',
  async ({ make, model }, { getState }) => {
    const storedVehicles = selectVehicles(getState(), make, model);
    if (storedVehicles) {
      return { make, vehicles: storedVehicles };
    }
    const vehicles = await fetchVehicles(make);
    return {
      make,
      model,
      vehicles,
    };
  },
);


export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    areMakesFetching: false,
    areModelsFetching: false,
    areVehiclesFetching: false,
    makes: {},
  },
  extraReducers: {
    [getMakes.pending]: (state) => {
      state.areMakesFetching = true;
    },
    [getMakes.fulfilled]: (state, action) => {
      state.areMakesFetching = false;
      state.makes = action.payload;
    },
    [getMakes.rejected]: (state, action) => {
      state.areMakesFetching = false;
    },
    [getModels.pending]: (state, action) => {
      state.areModelsFetching = true;
    },
    [getModels.fulfilled]: (state, action) => {
      state.areModelsFetching = false;
      state.makes = action.payload;
      //convert array to object
    },
    [getModels.rejected]: (state, action) => {
      state.areModelsFetching = false;

    },
    [getVehicles.pending]: (state, action) => {
      state.areVehiclesFetching = true;
    },
    [getVehicles.fulfilled]: (state, action) => {
      state.areVehiclesFetching = false;
    },
    [getVehicles.rejected]: (state, action) => {
      state.areVehiclesFetching = false;
    },
  },
});


export default carsSlice.reducer;
