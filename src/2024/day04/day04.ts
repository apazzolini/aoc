import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input: string) {
  let lines = input.split('\n').map((l) => l.split(''));

  return lines;
}

export function solvePart1(raw: string) {
  // prettier-ignore
  const matches = [
    [[0, 1], [0, 2], [0, 3]],
    [[1, 0], [2, 0], [3, 0]],
    [[1, 1], [2, 2], [3, 3]],
    [[0, -1], [0, -2], [0, -3]],
    [[-1, 0], [-2, 0], [-3, 0]],
    [[-1, -1], [-2, -2], [-3, -3]],
    [[-1, 1], [-2, 2], [-3, 3]],
    [[1, -1], [2, -2], [3, -3]],
  ];

  let grid = parseInput(raw);
  let ans = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] !== 'X') {
        continue;
      }

      for (let m of matches) {
        try {
          if (grid[r + m[0][0]][c + m[0][1]] !== 'M') {
            continue;
          }
          if (grid[r + m[1][0]][c + m[1][1]] !== 'A') {
            continue;
          }
          if (grid[r + m[2][0]][c + m[2][1]] !== 'S') {
            continue;
          }
          ans++;
        } catch (e) {
          // Do nothing;
        }
      }
    }
  }
  return ans;
}

export function solvePart2(raw: string) {
  let grid = parseInput(raw);
  let ans = 0;

  for (let r = 1; r < grid.length - 1; r++) {
    for (let c = 1; c < grid[r].length - 1; c++) {
      if (grid[r][c] !== 'A') {
        continue;
      }

      const tlbr = `${grid[r - 1][c - 1]}A${grid[r + 1][c + 1]}`;
      const bltr = `${grid[r + 1][c - 1]}A${grid[r - 1][c + 1]}`;

      if ((tlbr === 'MAS' || tlbr === 'SAM') && (bltr === 'MAS' || bltr === 'SAM')) {
        ans++;
      }
    }
  }
  return ans;
}
