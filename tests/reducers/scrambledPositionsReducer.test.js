import reducer from '../../src/reducers/scrambledPositionsReducer';

const scrambledPositions = [{ a: 'c', b: 'd' }, { a: 'a', b: 'b' }, { a: 'e', b: 'f' }];
const initialState = { scrambledPositions: [] };

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, initialState)).toEqual(initialState);
  });

  it('should handle SCRAMBLE_LIST_OF_POSITIONS', () => {
    const scrambleListOfPositions = {
      type: 'SCRAMBLE_LIST_OF_POSITIONS',
      positions: scrambledPositions,
    };

    expect(reducer(undefined, scrambleListOfPositions)).toEqual({
      scrambledPositions,
    });
  });
});
