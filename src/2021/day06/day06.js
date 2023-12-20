import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split(',').map(Number);
  return lines;
}

export function solvePart1(input) {
  let fish = parseInput(input);

  for (let day = 0; day < 80; day++) {
    for (let f = fish.length - 1; f >= 0; f--) {
      if (fish[f] === 0) {
        fish.push(8);
        fish[f] = 6;
      } else {
        fish[f]--;
      }
    }
  }

  return fish.length;
}

export function solvePart2(input) {
  let fish = parseInput(input);

  const byAge = new Array(9).fill(0);
  fish.forEach((f) => byAge[f]++);

  for (let day = 0; day < 256; day++) {
    let toSpawn = byAge[0];
    byAge[0] = 0;

    for (let n = 1; n <= 8; n++) {
      byAge[n - 1] += byAge[n];
      byAge[n] = 0;
    }

    byAge[8] = toSpawn;
    byAge[6] += toSpawn;
  }

  return _.sum(Object.values(byAge));
}
