import { SCRAMBLE_LIST_OF_POSITIONS } from '../actions/';

const initialState = { scrambledPositions: [] };

const scrambledPositionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCRAMBLE_LIST_OF_POSITIONS:
      return { ...state, scrambledPositions: action.positions };
    default:
      return state;
  }
};

export default scrambledPositionsReducer;
