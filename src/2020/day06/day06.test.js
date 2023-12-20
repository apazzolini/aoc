import { solvePart1, solvePart2 } from './day06.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2020 day 06', () => {
  const example = `abc

a
b
c

ab
ac

a
a
a
a

b`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(11);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(6);
    });
  });
});
