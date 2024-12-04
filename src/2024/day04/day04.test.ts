import { describe, test, expect } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day04.ts'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2024 day 04', () => {
  const example = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(18);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(9);
    });
  });
});
