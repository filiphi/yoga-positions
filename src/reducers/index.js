import { combineReducers } from 'redux';

import positionsReducer from './positionsReducer';
import scrambledPositionsReducer from './scrambledPositionsReducer';

// Combine all the reducers
const rootReducer = combineReducers({
  positionsReducer,
  scrambledPositionsReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
