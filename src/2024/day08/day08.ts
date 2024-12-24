import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input: string) {
  return U.Grid.fromInput(input);
}

interface Antenna {
  char: string;
  locs: Array<{ x: number; y: number }>;
  antinodes: Array<{ x: number; y: number }>;
}

function getNodes(grid: U.Grid<string>) {
  let nodes = new Map<string, Antenna>();

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let char = grid[x][y];
      if (char === '.') {
        continue;
      }

      if (!nodes.has(char)) {
        nodes.set(char, { char, locs: [], antinodes: [] });
      }

      nodes.get(char)!.locs.push({ x, y });
    }
  }

  return nodes;
}

export function solvePart1(raw: string) {
  let grid = parseInput(raw);
  let nodes = getNodes(grid);

  for (const node of nodes.values()) {
    if (node.locs.length < 2) {
      continue;
    }

    for (let i = 0; i < node.locs.length - 1; i++) {
      for (let j = i + 1; j < node.locs.length; j++) {
        const distX = node.locs[j].x - node.locs[i].x;
        const distY = node.locs[j].y - node.locs[i].y;

        const anti1 = {
          x: node.locs[i].x - distX,
          y: node.locs[i].y - distY,
        };

        const anti2 = {
          x: node.locs[j].x + distX,
          y: node.locs[j].y + distY,
        };

        if (grid.inBounds(anti1.x, anti1.y)) {
          node.antinodes.push(anti1);
        }

        if (grid.inBounds(anti2.x, anti2.y)) {
          node.antinodes.push(anti2);
        }
      }
    }
  }

  let uniqs = new Set<string>();
  for (let node of nodes.values()) {
    for (let anti of node.antinodes) {
      uniqs.add(`${anti.x},${anti.y}`);
    }
  }

  return uniqs.size;
}

export function solvePart2(raw: string) {
  let grid = parseInput(raw);
  let nodes = getNodes(grid);

  for (const node of nodes.values()) {
    if (node.locs.length < 2) {
      continue;
    }

    for (let i = 0; i < node.locs.length - 1; i++) {
      for (let j = i + 1; j < node.locs.length; j++) {
        const distX = node.locs[j].x - node.locs[i].x;
        const distY = node.locs[j].y - node.locs[i].y;

        let anti = { x: node.locs[i].x, y: node.locs[i].y };
        while (true) {
          anti = {
            x: anti.x - distX,
            y: anti.y - distY,
          };

          if (grid.inBounds(anti.x, anti.y)) {
            node.antinodes.push(anti);
          } else {
            break;
          }
        }

        anti = { x: node.locs[j].x, y: node.locs[j].y };
        while (true) {
          anti = {
            x: anti.x + distX,
            y: anti.y + distY,
          };

          if (grid.inBounds(anti.x, anti.y)) {
            node.antinodes.push(anti);
          } else {
            break;
          }
        }
      }
    }
  }

  let uniqs = new Set<string>();
  for (let node of nodes.values()) {
    if (node.antinodes.length) {
      for (let loc of node.locs) {
        uniqs.add(`${loc.x},${loc.y}`);
      }
    }

    for (let anti of node.antinodes) {
      uniqs.add(`${anti.x},${anti.y}`);
    }
  }

  return uniqs.size;
}
