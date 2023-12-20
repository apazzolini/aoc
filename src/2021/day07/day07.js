import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  return input.split(',').map(Number);
}

function calcFuelLinear(crabs, pos) {
  let fuel = 0;

  for (const c of crabs) {
    fuel += Math.abs(c - pos);
  }

  return fuel;
}

function calcFuelExponential(crabs, pos) {
  let fuel = 0;

  for (const c of crabs) {
    const diff = Math.abs(c - pos);
    fuel += (diff * (diff + 1)) / 2;
  }

  return fuel;
}

function findPos(crabs, fuelCalculator) {
  let min = _.min(crabs);
  let max = _.max(crabs);

  let ans = { fuel: Number.MAX_SAFE_INTEGER, pos: 0 };

  for (let i = min; i <= max; i++) {
    const fuel = fuelCalculator(crabs, i);
    if (fuel < ans.fuel) {
      ans.fuel = fuel;
      ans.pos = i;
    }
  }

  return ans.fuel;
}

export function solvePart1(input) {
  let crabs = parseInput(input);
  return findPos(crabs, calcFuelLinear);
}

export function solvePart2(input) {
  let crabs = parseInput(input);
  return findPos(crabs, calcFuelExponential);
}
