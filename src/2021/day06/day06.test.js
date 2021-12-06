import { solvePart1, solvePart2 } from './day06.js' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

describe('2021 day 06', () => {
  const example = `3,4,3,1,2`

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(5934)
    })
  })

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(26984457539)
    })
  })
})
