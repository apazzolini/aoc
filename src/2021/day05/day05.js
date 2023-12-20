import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n');

  lines = lines.map((l) => {
    const [x1, y1, x2, y2] = U.extractNumbers(l, true);
    return { x1, y1, x2, y2 };
  });

  return lines;
}

function travelLine(line, cb) {
  const isHorizontal = line.y1 === line.y2;
  const isVertical = line.x1 === line.x2;

  if (isHorizontal) {
    const start = Math.min(line.x1, line.x2);
    const end = Math.max(line.x1, line.x2);

    for (let x = start; x <= end; x++) {
      cb('h', x, line.y1);
    }
  } else if (isVertical) {
    const start = Math.min(line.y1, line.y2);
    const end = Math.max(line.y1, line.y2);

    for (let y = start; y <= end; y++) {
      cb('v', line.x1, y);
    }
  } else {
    let curX = line.x1;
    let curY = line.y1;

    while (curX !== line.x2) {
      cb('d', curX, curY);

      curX += line.x1 < line.x2 ? 1 : -1;
      curY += line.y1 < line.y2 ? 1 : -1;
    }

    cb('d', curX, curY);
  }
}

export function solvePart1(input) {
  input = parseInput(input);

  const pointCounts = {};
  input.forEach((line) => {
    travelLine(line, (type, x, y) => {
      if (type === 'd') return;
      const key = `${x},${y}`;
      pointCounts[key] = (pointCounts[key] || 0) + 1;
    });
  });

  return Object.values(pointCounts).filter((v) => v > 1).length;
}

export function solvePart2(input) {
  input = parseInput(input);

  const pointCounts = {};
  input.forEach((line) => {
    travelLine(line, (type, x, y) => {
      const key = `${x},${y}`;
      pointCounts[key] = (pointCounts[key] || 0) + 1;
    });
  });

  return Object.values(pointCounts).filter((v) => v > 1).length;
}
