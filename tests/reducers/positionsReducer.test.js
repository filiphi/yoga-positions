import reducer from '../../src/reducers/positionsReducer';

const positions = [{ a: 'a', b: 'b' }, { a: 'c', b: 'd' }, { a: 'e', b: 'f' }];

const initialData = { positions };

describe('team reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialData, {})).toEqual(initialData);
  });
});
