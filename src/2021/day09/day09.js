import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  return U.Grid.fromInput(input);
}

function isLowPoint(grid, x, y) {
  const neighbors = grid.neighbors4(x, y);
  const val = Number(grid[x][y]);
  return neighbors.every((n) => val < grid[n.x][n.y]);
}

function findLows(grid) {
  const lows = [];

  grid.forEach((col, x) => {
    col.forEach((cell, y) => {
      if (isLowPoint(grid, x, y)) {
        lows.push({ x, y });
      }
    });
  });

  return lows;
}

export function solvePart1(input) {
  const grid = parseInput(input);
  return findLows(grid).reduce((acc, low) => acc + Number(grid[low.x][low.y]) + 1, 0);
}

function calcFlowPoints(grid, low) {
  const val = grid[low.x][low.y];
  const neighbors = grid.neighbors4(low.x, low.y);
  const willFlow = neighbors.filter((n) => grid[n.x][n.y] != 9 && grid[n.x][n.y] > val);
  if (!willFlow.length) {
    return [];
  }
  return _.flatten([...willFlow, _.flatMap(willFlow, (f) => calcFlowPoints(grid, f))]);
}

export function solvePart2(input) {
  const grid = parseInput(input);
  const basinSizes = findLows(grid).map((low) => {
    const flow = calcFlowPoints(grid, low);
    return _.uniqBy(flow, (f) => `${f.x},${f.y}`).length + 1;
  });
  const largestBasins = basinSizes
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, 3);
  return largestBasins.reduce((acc, basin) => acc * basin, 1);
}
