import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

const POINTS = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const COMPLETION_POINTS = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

const PAIR = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};

function parseInput(input) {
  return input.split('\n');
}

function isOpeningChar(c) {
  return c == '(' || c == '[' || c == '{' || c == '<';
}

function isCloser(c, opener) {
  if (opener == '(') return c == ')';
  if (opener == '[') return c == ']';
  if (opener == '{') return c == '}';
  if (opener == '<') return c == '>';
}

function getPoints(line) {
  const stack = [];

  for (const c of line) {
    if (isOpeningChar(c)) {
      stack.push(c);
    } else {
      const opener = stack.pop();
      if (!isCloser(c, opener)) {
        return POINTS[c];
      }
    }
  }

  return 0;
}

export function solvePart1(input) {
  let lines = parseInput(input);
  return _.sum(lines.map((line) => getPoints(line)));
}

function calculateScore(line) {
  const stack = [];

  for (const c of line) {
    if (isOpeningChar(c)) {
      stack.push(c);
    } else {
      const opener = stack.pop();
      if (!isCloser(c, opener)) {
        return 0;
      }
    }
  }

  let score = 0;
  for (let c of stack.reverse()) {
    score = score * 5 + COMPLETION_POINTS[PAIR[c]];
  }
  return score;
}

export function solvePart2(input) {
  let lines = parseInput(input);
  const scores = lines
    .map((l) => calculateScore(l))
    .filter((s) => s > 0)
    .sort((a, b) => a - b);
  return scores[Math.floor(scores.length / 2)];
}
