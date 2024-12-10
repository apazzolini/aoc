import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input: string) {
  let lines = input.split('\n').map((l) => {
    let [answer, numbersRaw] = l.split(': ');
    let numbers = U.extractNumbers(numbersRaw);
    return { answer: Number(answer), numbers };
  });

  return lines;
}

function allPossibleResults(numbers: number[], useConcatenator: boolean) {
  let results: number[] = [numbers.splice(0, 1)[0]];

  for (let number of numbers) {
    let newResults: number[] = [];

    for (let result of results) {
      newResults.push(result + number);
      newResults.push(result * number);
      if (useConcatenator) {
        newResults.push(Number(`${result}${number}`));
      }
    }

    results = newResults;
  }

  return results;
}

export function solvePart1(raw: string) {
  let input = parseInput(raw);

  let ans = 0;
  for (let { answer, numbers } of input) {
    if (allPossibleResults(numbers, false).some((r) => r === answer)) {
      ans += answer;
    }
  }

  return ans;
}

export function solvePart2(raw: string) {
  let input = parseInput(raw);

  let ans = 0;
  for (let { answer, numbers } of input) {
    if (allPossibleResults(numbers, true).some((r) => r === answer)) {
      ans += answer;
    }
  }

  return ans;
}
