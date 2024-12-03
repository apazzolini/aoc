import { describe, test, expect } from 'bun:test'; // eslint-disable-line
import { solvePart1, solvePart2 } from './day03.ts'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2024 day 03', () => {
  const example = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
  const example2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(161);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example2)).toEqual(48);
    });
  });
});
