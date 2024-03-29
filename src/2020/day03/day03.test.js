import { solvePart1, solvePart2 } from './day03.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2020 day 03', () => {
  const example = U.trim(`
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
  `);

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(7);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(336);
    });
  });
});
