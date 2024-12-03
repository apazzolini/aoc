import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

export function solvePart1(raw: string) {
  let re = /mul\(\d{1,3},\d{1,3}\)/g;
  let ans = 0;
  for (let match of raw.matchAll(re)) {
    let nums = U.extractNumbers(match[0], true);
    ans += nums[0] * nums[1];
  }
  return ans;
}

export function solvePart2(raw: string) {
  let re = /mul\(\d{1,3},\d{1,3}\)/g;
  let re2 = /do\(\)|don't\(\)/g;

  let enable: number[] = [-1];
  let disable: number[] = [];

  for (let match of raw.matchAll(re2)) {
    if (match[0] === 'do()') {
      enable.push(match.index!);
    } else {
      disable.push(match.index!);
    }
  }

  let ans = 0;
  for (let match of raw.matchAll(re)) {
    const nearestEnable = enable.findLast((n) => n < match.index!) ?? -1;
    const nearestDisable = disable.findLast((n) => n < match.index!) ?? -2;

    if (nearestDisable > nearestEnable) {
      continue;
    }

    const nums = U.extractNumbers(match[0], true);
    ans += nums[0] * nums[1];
  }
  return ans;
}
