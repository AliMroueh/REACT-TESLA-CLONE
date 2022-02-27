import { configureStore } from '@reduxjs/toolkit';
import carRed from '../features/car/carSlice'

export const store = configureStore({
  reducer: {
    car: carRed
  },
});
