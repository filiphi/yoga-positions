import { combineReducers } from 'redux';

import { SCRAMBLE_LIST_OF_POSITIONS } from '../actions/';
import positions from '../data/positions';

const initialData = { positions, scrambledPositions: positions };

const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case SCRAMBLE_LIST_OF_POSITIONS:
      return { ...state, scrambledPositions: action.positions };
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
