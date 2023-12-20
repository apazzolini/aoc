import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  return input.split('\n').map(Number);
}

export function solvePart1(input, window = 25) {
  input = parseInput(input);

  for (let i = window; i < input.length; i++) {
    const target = input[i];

    let found = false;

    for (let k = i - window; k < input.length - window - 1; k++) {
      for (let j = k + 1; j - input.length - window; j++) {
        if (input[k] + input[j] === target) {
          found = true;
        }
      }
    }

    if (!found) {
      return target;
    }
  }
}

export function solvePart2(input, target = 248131121) {
  input = parseInput(input);

  for (let start = 0; start < input.length; start++) {
    let curSum = input[start];
    let stop = start + 1;

    while (curSum < target && stop < input.length) {
      curSum += input[stop];
      stop++;
    }

    if (curSum === target) {
      const range = input.slice(start, stop);
      return _.min(range) + _.max(range);
    }
  }
}
