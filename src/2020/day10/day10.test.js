import { solvePart1, solvePart2 } from './day10.js'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

describe('2020 day 10', () => {
  const example = `16
10
15
5
1
11
7
19
6
12
4`;

  const example2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(35);
    });
  });

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(8);
      expect(solvePart2(example2)).toEqual(19208);
    });
  });
});
