import _ from 'lodash' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

function parseInput(input) {
  const lines = input.split('\n').map(Number)
  lines.sort((a, b) => a - b)
  lines.unshift(0)
  lines.push(lines[lines.length - 1] + 3)
  return lines
}

export function solvePart1(input) {
  input = parseInput(input)

  let n1 = 0
  let n3 = 0

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i + 1] - input[i] === 1) n1++
    if (input[i + 1] - input[i] === 3) n3++
  }

  return n1 * n3
}

export function solvePart2(input) {
  input = parseInput(input)

  let memo = []

  function calc(i) {
    if (memo[i]) return memo[i]
    if (i === input.length - 1) return 1

    let res = 0
    let j = i + 1
    while (input[j] - input[i] <= 3) {
      res += calc(j)
      j++
    }

    memo[i] = res
    return res
  }

  return calc(0)
}
