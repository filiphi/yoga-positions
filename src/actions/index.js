import positions from '../data/positions';
import shuffleArray from '../helpers/shuffleArray';

export const SCRAMBLE_LIST_OF_POSITIONS = 'SCRAMBLE_LIST_OF_POSITIONS';
export const START_QUIZ = 'SCRAMBLE_LIST_OF_POSITIONS';
export const QUESTION_ANSWERED = 'SCRAMBLE_LIST_OF_POSITIONS';

export const scramblePositions = (dispatch) => {
  const shuffledPositions = shuffleArray(positions);
  dispatch({ type: SCRAMBLE_LIST_OF_POSITIONS, positions: shuffledPositions });
};

export const startQuiz = (dispatch) => {
  dispatch({
    type: START_QUIZ,
    index: 0,
  });
};

export const questionAnswered = (dispatch) => {
  dispatch({
    type: QUESTION_ANSWERED,
  });
};
