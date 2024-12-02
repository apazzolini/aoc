import { describe, test, expect } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day01.ts'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2024 day 01', () => {
  const example = `3   4
4   3
2   5
1   3
3   9
3   3`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(11);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(31);
    });
  });
});
