import { describe, expect, test } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day01.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2023 day 01', () => {
  const example = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  const example2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(142);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example2)).toEqual(281);
    });
  });
});
