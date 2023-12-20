import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n');

  return lines;
}

const COUNTS = {
  red: 12,
  green: 13,
  blue: 14,
};

// 12 red cubes, 13 green cubes, and 14 blue cubes
// const example = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

export function solvePart1(input) {
  input = parseInput(input);
  return input.reduce((acc, line) => {
    let possible = true;

    const [, id, rest] = /Game (\d+): (.*)/.exec(line) ?? [];
    for (const game of rest.split(';')) {
      for (const draw of game.split(',').map((g) => g.trim())) {
        const [count, color] = draw.split(' ');
        if (COUNTS[color] < count) {
          possible = false;
        }
      }
    }

    return acc + (possible ? Number(id) : 0);
  }, 0);
}

export function solvePart2(input) {
  input = parseInput(input);
  return input.reduce((acc, line) => {
    const mins = {
      red: 0,
      green: 0,
      blue: 0,
    };

    const [, , rest] = /Game (\d+): (.*)/.exec(line) ?? [];
    for (const game of rest.split(';')) {
      for (const draw of game.split(',').map((g) => g.trim())) {
        const [count, color] = draw.split(' ');

        if (mins[color] < Number(count)) {
          mins[color] = Number(count);
        }
      }
    }

    return acc + mins.red * mins.green * mins.blue;
  }, 0);
}
