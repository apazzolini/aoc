import _ from 'lodash' // eslint-disable-line
import * as U from '../../utils.js' // eslint-disable-line

function parseInput(input) {
  const lines = input.split('\n')
  return {
    estimate: Number(lines[0]),
    buses: lines[1]
      .split(',')
      .filter(e => e !== 'x')
      .map(Number),
  }
}

export function solvePart1(input) {
  const { estimate, buses } = parseInput(input)

  const departures = buses.map(b => {
    let start = estimate
    while (start % b !== 0) {
      start++
    }
    return start
  })

  const time = _.min(departures)
  const bus = buses[departures.indexOf(time)]
  return (time - estimate) * bus
}

export function solvePart2(input) {
  const buses = input
    .split('\n')[1]
    .split(',')
    .map((n, idx) => (n === 'x' ? null : [Number(n), idx]))
    .filter(Boolean)

  let t = 0
  let step = 1

  for (let i = 0; i < buses.length; i++) {
    const [busNumber, busIdx] = buses[i]
    while ((t + busIdx) % busNumber !== 0) {
      t += step
    }
    step *= busNumber
  }

  return t
}
