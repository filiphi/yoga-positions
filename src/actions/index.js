import positions from '../data/positions';
import shuffleArray from '../helpers/shuffleArray';

export const SCRAMBLE_LIST_OF_POSITIONS = 'SCRAMBLE_LIST_OF_POSITIONS';

export const scramblePositions = (dispatch) => {
  const shuffledPositions = shuffleArray(positions);
  dispatch({ type: SCRAMBLE_LIST_OF_POSITIONS, positions: shuffledPositions });
};
