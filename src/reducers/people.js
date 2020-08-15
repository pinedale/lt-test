import { createReducer } from '@reduxjs/toolkit';

import { getPeoples } from '../actions/people';

const initialState = {
  peoples: [],
  next: null,
  previous: null,
};

export default createReducer(initialState, {
  [String(getPeoples.pending)]: (state) => ({
    ...state,
  }),
  [String(getPeoples.fulfilled)]: (state, action) => ({
    ...state,
    peoples: action.payload.results,
    next: action.payload.next,
    previous: action.payload.previous,
  }),
  [String(getPeoples.rejected)]: (state) => ({
    ...state,
  }),
});
