import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input: string) {
  let [rulesRaw, updatesRaw] = input.split('\n\n');

  let rules = rulesRaw.split('\n').reduce((acc, r) => {
    const [left, right] = r.split('|').map(Number);

    if (!acc.has(left)) {
      acc.set(left, []);
    }
    acc.get(left)!.push(right);

    return acc;
  }, new Map<number, number[]>());

  return {
    rules,
    updates: updatesRaw.split('\n').map((p) => p.split(',').map(Number)),
  };
}

function isValid(rules: Map<number, number[]>, update: number[]): boolean {
  for (let i = 1; i < update.length; i++) {
    if (rules.has(update[i])) {
      const deps = rules.get(update[i])!;
      for (let j = 0; j < i; j++) {
        if (deps.includes(update[j])) {
          return false;
        }
      }
    }
  }

  return true;
}

export function solvePart1(raw: string) {
  let { rules, updates } = parseInput(raw);

  let ans = 0;
  for (let update of updates) {
    if (isValid(rules, update)) {
      let mid = Math.floor(update.length / 2);
      ans += update[mid];
    }
  }

  return ans;
}

export function solvePart2(raw: string) {
  let { rules, updates } = parseInput(raw);

  let ans = 0;
  for (let update of updates) {
    if (!isValid(rules, update)) {
      update.sort((a, b) => {
        if (rules.get(a)?.includes(b)) {
          return -1;
        }
        if (rules.get(b)?.includes(a)) {
          return 1;
        }
        return 0;
      });

      let mid = Math.floor(update.length / 2);
      ans += update[mid];
    }
  }

  return ans;
}
