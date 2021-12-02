import _ from 'lodash' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

function parseInput(input) {
  return input.split('\n')
}

export function solvePart1(input) {
  input = parseInput(input)

  let x = 0
  let y = 0

  input.forEach(i => {
    let [dir, num] = i.split(' ')
    num = Number(num)

    if (dir === 'forward') x += num
    if (dir === 'down') y += num
    if (dir === 'up') y -= num
  })

  return x * y
}

export function solvePart2(input) {
  input = parseInput(input)

  let x = 0
  let y = 0
  let aim = 0

  input.forEach(i => {
    let [dir, num] = i.split(' ')
    num = Number(num)

    if (dir === 'forward') {
      x += num
      y += aim * num
    }
    if (dir === 'down') aim += num
    if (dir === 'up') aim -= num
  })

  return x * y
}
