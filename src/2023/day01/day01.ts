import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils.js'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n');

  return lines;
}

export function solvePart1(input) {
  input = parseInput(input);
  return input.reduce((acc, line) => {
    const numbers = U.extractDigits(line);
    return acc + Number(numbers[0] + '' + numbers.at(-1));
  }, 0);
}

export function solvePart2(input) {
  input = parseInput(input);
  const numberStrs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const regex = /^(zero|one|two|three|four|five|six|seven|eight|nine)/g;

  return input.reduce((acc, line: string) => {
    let first: number | null = null;
    let last: number | null = null;

    for (let i = 0; i < line.length; i++) {
      let answer = !Number.isNaN(Number(line[i])) ? Number(line[i]) : null;
      if (answer === null) {
        const res = line.substring(i).match(regex);
        if (res) {
          answer = numberStrs.indexOf(res[0]);
        }
      }

      if (answer !== null) {
        if (first === null) {
          first = answer;
        }
        last = answer;
      }
    }

    return acc + Number(first + '' + last);

    // const numbers = (line.match(regex) || []).map((n) => n.replace(/,/g, ''));

    // const idx = numberStrs.indexOf(numbers[0]);
    // const idx2 = numberStrs.indexOf(numbers.at(-1));

    // console.log(
    //   acc,
    //   line,
    //   numbers,
    //   (idx === -1 ? Number(numbers[0]) : idx) + '' + (idx2 === -1 ? Number(numbers.at(-1)) : idx2),
    // );

    // return (
    //   acc +
    //   Number((idx === -1 ? Number(numbers[0]) : idx) + '' + (idx2 === -1 ? Number(numbers.at(-1)) : idx2))
    // );
  }, 0);
}
