import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input: string): Array<number> {
  let lines = input.split('\n');
  return lines.map((l) => {
    let n = Number(l.substring(1));
    return l[0] === 'L' ? -n : n;
  });
}

export function solvePart1(raw: string) {
  let input = parseInput(raw);
  let cur = 50;
  let ans = 0;

  for (let n of input) {
    // Advance to next position
    cur = (cur + n) % 100;
    if (cur < 0) {
      cur = 100 + cur;
    }

    // Incr if on zero
    if (cur === 0) {
      ans++;
    }
  }

  return ans;
}

export function solvePart2(raw: string) {
  let input = parseInput(raw);
  let cur = 50;
  let ans = 0;

  for (let n of input) {
    // Incr num of times we will be crossing zero
    let fullTurns = Math.floor(Math.abs(n / 100));
    ans += fullTurns;

    n = n % 100;
    if (cur !== 0) {
      if (n > 0 && cur + n >= 100) {
        ans++;
      }
      if (n < 0 && cur + n <= 0) {
        ans++;
      }
    }

    // Advance to next position
    cur = (cur + n) % 100;
    if (cur < 0) {
      cur = 100 + cur;
    }
  }

  return ans;
}
