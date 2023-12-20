import { solvePart1, solvePart2 } from './day03.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2021 day 03', () => {
  const example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(198);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(230);
    });
  });
});
