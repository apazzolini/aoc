import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input): number[][] {
  let lines = input.split('\n').map((l) => l.split(/\s+/).map(Number));
  return lines;
}

function isSafe(report: number[]) {
  if (report[0] === report[1]) {
    return false;
  }

  const inc = report[0] < report[1];
  for (let i = 0; i < report.length - 1; i++) {
    const diff = Math.abs(report[i] - report[i + 1]);
    if ((inc && report[i] >= report[i + 1]) || diff < 1 || diff > 3) {
      return false;
    }
    if ((!inc && report[i + 1] >= report[i]) || diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
}

export function solvePart1(input) {
  input = parseInput(input);

  let numSafe = 0;
  for (const r of input) {
    if (isSafe(r)) {
      numSafe++;
    }
  }

  return numSafe;
}

export function solvePart2(input) {
  let reports = parseInput(input);

  let numSafe = 0;
  for (const r of reports) {
    if (isSafe(r)) {
      numSafe++;
    } else {
      for (let i = 0; i < r.length; i++) {
        const dampened = [...r];
        dampened.splice(i, 1);
        if (isSafe(dampened)) {
          numSafe++;
          break;
        }
      }
    }
  }

  return numSafe;
}
