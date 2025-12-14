import { describe, test, expect } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day01.ts'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2025 day 01', () => {
  const example = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(3);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(6);
    });
  });
});
