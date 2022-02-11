import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../features/List/listSlice';

export const store = configureStore({
  reducer: {
    user:listReducer,
  },
});

