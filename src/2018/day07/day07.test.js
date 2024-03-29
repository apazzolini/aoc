import { solvePart1, solvePart2 } from './day07.js';
import { trim } from '../../utils';

describe('2018 day 07', () => {
  const example = trim(`
        Step C must be finished before step A can begin.
        Step C must be finished before step F can begin.
        Step A must be finished before step B can begin.
        Step A must be finished before step D can begin.
        Step B must be finished before step E can begin.
        Step D must be finished before step E can begin.
        Step F must be finished before step E can begin.
    `);

  describe('part 1', () => {
    test('solves an example', () => {
      const answer = solvePart1(example);
      expect(answer).toEqual('CABDFE');
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      const answer = solvePart2(example);
      expect(answer).toEqual(15);
    });
  });
});
