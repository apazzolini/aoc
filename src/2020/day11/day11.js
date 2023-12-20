import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function countDiagonals(grid, x, y) {
  return grid.neighbors8(x, y).filter((n) => grid[n.x][n.y] === '#').length;
}

function countVisibles(grid, x, y) {
  let occupied = 0;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dy === 0 && dx === 0) continue;

      let curX = x + dx;
      let curY = y + dy;

      while (curX >= 0 && curX < grid.length && curY >= 0 && curY < grid[0].length) {
        if (grid[curX][curY] === 'L') break;
        if (grid[curX][curY] === '#') {
          occupied++;
          break;
        }
        curX += dx;
        curY += dy;
      }
    }
  }

  return occupied;
}

function run(grid, countNeighbors, tolerance) {
  const next = grid.copy();

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      const numNeighbors = countNeighbors(grid, x, y);
      if (grid[x][y] === 'L' && numNeighbors === 0) {
        next[x][y] = '#';
      } else if (grid[x][y] === '#' && numNeighbors >= tolerance) {
        next[x][y] = 'L';
      }
    }
  }

  return next;
}

export function solvePart1(input) {
  let grid = U.Grid.fromInput(input);

  while (true) {
    let nextGrid = run(grid, countDiagonals, 4);
    if (grid.equals(nextGrid)) break;
    grid = nextGrid;
  }

  return grid.count('#');
}

export function solvePart2(input) {
  let grid = U.Grid.fromInput(input);

  while (true) {
    let nextGrid = run(grid, countVisibles, 5);
    if (grid.equals(nextGrid)) break;
    grid = nextGrid;
  }

  return grid.count('#');
}
