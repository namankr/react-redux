import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/List/listSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:listReducer,
  },
});

