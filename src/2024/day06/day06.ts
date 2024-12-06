import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input: string) {
  return U.Grid.fromInput(input);
}

function findGuard(grid: U.Grid<string>) {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === '^') {
        return { x, y };
      }
    }
  }
  throw new Error('Unable to find guard');
}

export function solvePart1(raw: string) {
  let grid = parseInput(raw);

  let { x: curX, y: curY } = findGuard(grid);
  grid[curX][curY] = 'X';
  let dx = 0;
  let dy = -1;

  while (true) {
    if (!grid.inBounds(curX + dx, curY + dy)) {
      break;
    }

    let front = grid[curX + dx][curY + dy];
    if (front === '.' || front === 'X') {
      curX += dx;
      curY += dy;
      grid[curX][curY] = 'X';
    } else {
      dy *= -1;
      [dx, dy] = [dy, dx];
    }
  }

  return grid.count('X');
}

export function solvePart2(raw: string) {
  let origGrid = parseInput(raw);
  let initialGuard = findGuard(origGrid);
  let ans = 0;

  for (let x = 0; x < origGrid.length; x++) {
    for (let y = 0; y < origGrid[x].length; y++) {
      if (origGrid[x][y] !== '.') {
        continue;
      }

      let seen = new Set<string>();
      let grid = origGrid.copy();
      grid[x][y] = '#';

      let { x: curX, y: curY } = initialGuard;
      grid[curX][curY] = 'X';
      let dx = 0;
      let dy = -1;

      while (true) {
        let key = `${curX},${curY},${dx},${dy}`;
        if (seen.has(key)) {
          ans++;
          break;
        } else {
          seen.add(key);
        }

        if (!grid.inBounds(curX + dx, curY + dy)) {
          break;
        }

        let front = grid[curX + dx][curY + dy];
        if (front === '.' || front === 'X') {
          curX += dx;
          curY += dy;
          grid[curX][curY] = 'X';
        } else {
          dy *= -1;
          [dx, dy] = [dy, dx];
        }
      }
    }
  }

  return ans;
}
