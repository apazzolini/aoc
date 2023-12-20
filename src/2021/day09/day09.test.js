import { solvePart1, solvePart2 } from './day09.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2021 day 09', () => {
  const example = `2199943210
3987894921
9856789892
8767896789
9899965678`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(15);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(1134);
    });
  });
});
