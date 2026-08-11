import { configureStore } from '@reduxjs/toolkit';
import { vehiclesReducer } from './slice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
  },
});
