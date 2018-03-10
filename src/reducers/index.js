import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from '../actions/';

const startData = { words: ['hello', 'goodbye'] };

const dataReducer = (state = startData, action) => {
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
