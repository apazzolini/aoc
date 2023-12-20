import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n').map((l) => {
    let [input, output] = l.split(' | ');
    return { input: input.split(' '), output: output.split(' ') };
  });

  return lines;
}

export function solvePart1(input) {
  let lines = parseInput(input);
  return lines.reduce((acc, l) => {
    return acc + l.output.filter((o) => [2, 3, 4, 7].includes(o.length)).length;
  }, 0);
}

function getSegments(input) {
  let a, b, c, d, e, f, g;
  let map = [];
  input.forEach((i) => {
    (map[i.length] || (map[i.length] = [])).push(i.split('').sort());
  });

  const six = map[6].find((n) => _.difference(n, map[2][0]).length === 5);
  const three = map[5].find((n) => _.difference(n, map[2][0]).length === 3);
  const zero = map[6].find((n) => n !== six && _.difference(n, three).length === 2);
  const nine = map[6].find((n) => _.difference(n, three).length === 1);

  a = _.difference(map[3][0], map[2][0])[0];
  c = _.difference(map[7][0], six)[0];
  d = _.difference(map[7][0], zero)[0];
  e = _.difference(map[7][0], nine)[0];
  f = map[2][0].find((n) => n !== c);
  let bg = _.difference(['a', 'b', 'c', 'd', 'e', 'f', 'g'], [a, b, c, d, e, f, g]);
  b = map[4][0].find((n) => bg.includes(n));
  g = bg.find((n) => n !== b);

  return { a, b, c, d, e, f, g };
}

function calculateOutput(line) {
  const { input, output } = line;
  const { a, b, c, d, e, f, g } = getSegments(input);

  const nums = [
    a + b + c + e + f + g,
    c + f,
    a + c + d + e + g,
    a + c + d + f + g,
    b + c + d + f,
    a + b + d + f + g,
    a + b + d + e + f + g,
    a + c + f,
    a + b + c + d + e + f + g,
    a + b + c + d + f + g,
  ].map((e) => e.split('').sort().join(''));

  return output.reduce((acc, o) => {
    const num = nums.indexOf(o.split('').sort().join(''));
    return acc + String(num);
  }, '');
}

export function solvePart2(input) {
  let lines = parseInput(input);
  return lines.reduce((acc, l) => acc + Number(calculateOutput(l)), 0);
}
