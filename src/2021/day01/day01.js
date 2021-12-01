import _ from 'lodash' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

function parseInput(input) {
  const lines = input.split('\n').map(Number)
  return lines
}

export function solvePart1(input) {
  input = parseInput(input)

  let total = 0
  for (const [[a, b]] of U.consecutives(input)) {
    if (b > a) {
      total++
    }
  }
  return total
}

export function solvePart2(input) {
  input = parseInput(input)

  let total = 0
  for (const [[a, , , d]] of U.consecutives(input, 4)) {
    if (d > a) {
      total++
    }
  }
  return total
}
