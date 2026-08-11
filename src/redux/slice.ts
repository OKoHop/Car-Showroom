import { createSlice } from '@reduxjs/toolkit';
import { getVehicles } from './vehiclesOperation';

type VehiclesState = {
  vehicles: {
    limit: number;
    products: Array<object>;
    skip: number;
    total: number;
  };
  isLoading: boolean;
  error: string;
};

const initialState: VehiclesState = {
  vehicles: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  isLoading: false,
  error: '',
};

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getVehicles.pending, state => {
        state.isLoading = true;
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vehicles = action.payload;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? 'Unknown error';
      });
  },
});

export const vehiclesReducer = vehicleSlice.reducer;
