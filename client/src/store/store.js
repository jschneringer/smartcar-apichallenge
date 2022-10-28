import { configureStore } from '@reduxjs/toolkit';
import configReducer from './config.js';

export const store = configureStore({
  reducer: {
    config: configReducer,
  },
});

export default configureStore;