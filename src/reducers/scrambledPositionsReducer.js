import { SCRAMBLE_LIST_OF_POSITIONS } from '../actions/';

const scrambledPositionsReducer = (state = { scrambledPositions: [] }, action) => {
  switch (action.type) {
    case SCRAMBLE_LIST_OF_POSITIONS:
      return { ...state, scrambledPositions: action.positions };
    default:
      return state;
  }
};

export default scrambledPositionsReducer;
