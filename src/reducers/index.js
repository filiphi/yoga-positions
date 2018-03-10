import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from '../actions/';

const dataState = { data: [], loading: true };

const dataReducer = (action, state = dataState) => {
  const newData = action.data;
  switch (action.type) {
    case DATA_AVAILABLE:
      return { newData, ...state };
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
