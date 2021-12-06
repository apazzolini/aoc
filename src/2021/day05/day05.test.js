import { solvePart1, solvePart2 } from './day05.js' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

describe('2021 day 05', () => {
  const example = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(5)
    })
  })

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(12)
    })
  })
})
