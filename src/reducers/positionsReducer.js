import positions from '../data/positions';

const initialData = { positions };

const positionsReducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default positionsReducer;
