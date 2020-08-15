import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import promiseMiddleware from 'redux-promise-middleware';

import reducer from '../reducers';

const middleware = [promiseMiddleware, ...getDefaultMiddleware()];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;