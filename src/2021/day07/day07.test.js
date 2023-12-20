import { solvePart1, solvePart2 } from './day07.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2021 day 07', () => {
  const example = `16,1,2,0,4,2,7,1,2,14`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(37);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(168);
    });
  });
});
