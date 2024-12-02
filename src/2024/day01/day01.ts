import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n');
  let left: number[] = [];
  let right: number[] = [];

  for (const line of lines) {
    const nums = line.split(/\s+/).map(Number);
    left.push(nums[0]);
    right.push(nums[1]);
  }

  return [left, right];
}

export function solvePart1(input) {
  const [left, right] = parseInput(input);

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0; i < left.length; i++) {
    ans += Math.abs(left[i] - right[i]);
  }

  return ans;
}

export function solvePart2(input) {
  const [left, right] = parseInput(input);

  const counts = new Map<number, number>();
  for (const n of right) {
    const c = counts.get(n) ?? 0;
    counts.set(n, c + 1);
  }

  let ans = 0;
  for (const n of left) {
    ans += (counts.get(n) ?? 0) * n;
  }

  return ans;
}
