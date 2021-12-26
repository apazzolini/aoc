import { solvePart1, solvePart2 } from './day10.js' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

describe('2021 day 10', () => {
  const example = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`

  describe('part 1', () => {
    test('solves an example', () => {
      expect(solvePart1(example)).toEqual(26397)
    })
  })

  describe('part 2', () => {
    test('solves an example', () => {
      expect(solvePart2(example)).toEqual(288957)
    })
  })
})
