import { describe, test, expect } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day06.ts'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2024 day 06', () => {
  const example = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(41);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(6);
    });
  });
});