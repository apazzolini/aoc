import { solvePart1, solvePart2 } from './day02.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2021 day 02', () => {
  const example = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(150);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(900);
    });
  });
});
