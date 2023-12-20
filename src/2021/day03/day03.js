import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n');
  lines = lines.map((l) => l.split('').map(Number));
  return lines;
}

function getColCounts(input, col) {
  let count0 = 0;
  let count1 = 0;

  for (let row = 0; row < input.length; row++) {
    if (input[row][col] === 0) {
      count0++;
    } else {
      count1++;
    }
  }

  return [count0, count1];
}

export function solvePart1(input) {
  input = parseInput(input);

  let ans = '';

  for (let col = 0; col < input[0].length; col++) {
    const [count0, count1] = getColCounts(input, col);
    if (count1 > count0) {
      ans += '1';
    } else {
      ans += '0';
    }
  }

  let rev = U.translate(ans, '01', '10');
  return parseInt(rev, 2) * parseInt(ans, 2);
}

export function solvePart2(input) {
  input = parseInput(input);

  let col = 0;
  let o2Input = _.cloneDeep(input);
  while (o2Input.length > 1) {
    const [count0, count1] = getColCounts(o2Input, col);

    o2Input = o2Input.filter((r) => {
      const want = count0 > count1 ? 0 : 1;
      return r[col] == want;
    });

    col++;
  }
  let o2 = o2Input[0].join('');

  col = 0;
  let co2Input = _.cloneDeep(input);
  while (co2Input.length > 1) {
    const [count0, count1] = getColCounts(co2Input, col);

    co2Input = co2Input.filter((r) => {
      const want = count0 > count1 ? 1 : 0;
      return r[col] == want;
    });

    col++;
  }
  let co2 = co2Input[0].join('');

  return parseInt(o2, 2) * parseInt(co2, 2);
}
