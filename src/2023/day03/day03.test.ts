import { describe, test, expect } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day03.ts'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2023 day 03', () => {
  const example = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

  const example2 = `12.......*..
+.........34
.......-12..
..78........
..*....60...
78.........9
.5.....23..$
8...90*12...
............
2.2......12.
.*.........*
1.1..503+.56`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(4361);
      expect(solvePart1(example2)).toEqual(925);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual();
    });
  });
});
