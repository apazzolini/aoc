import { solvePart1, solvePart2 } from './day01.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2021 day 01', () => {
  const example = `199
200
208
210
200
207
240
269
260
263`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(7);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(5);
    });
  });
});
