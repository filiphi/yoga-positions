import positions from '../../src/data/positions';

describe('Positions', () => {
  it('is an array', () => {
    expect(Array.isArray(positions)).toBe(true);
  });

  it('that only contains objects with englishName, sanskritName and imageUrl as key ', () => {
    for (let i = positions.length - 1; i >= 0; i -= 1) {
      expect(Object.keys(positions[i])).toEqual(expect.arrayContaining(['englishName', 'sanskritName', 'imageUrl']));
    }
  });
});
