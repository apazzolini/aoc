import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

export function solvePart1(input) {
  let dirs = ['E', 'S', 'W', 'N'];
  let dir = 'E';
  let pos = { x: 0, y: 0 };

  input.split('\n').forEach((i) => {
    let action = i[0];
    let arg = Number(i.substring(1));

    if (action.match(/(R|L)/)) {
      const idx = dirs.indexOf(dir);
      const rotate = arg / 90;
      dir = action === 'L' ? dirs[(4 + idx - rotate) % 4] : dirs[(idx + rotate) % 4];
    }

    if (action === 'F') action = dir;

    if (action === 'N') pos.y -= arg;
    if (action === 'S') pos.y += arg;
    if (action === 'E') pos.x += arg;
    if (action === 'W') pos.x -= arg;
  });

  return U.manhattan({ x: 0, y: 0 }, pos);
}

export function solvePart2(input) {
  let wp = { x: 10, y: -1 };
  let pos = { x: 0, y: 0 };

  input.split('\n').forEach((i) => {
    let action = i[0];
    let arg = Number(i.substring(1));

    if (action.match(/(R|L)/)) {
      let rotate = (arg / 90) % 4;
      if (action === 'L') rotate = (4 - rotate) % 4;

      for (let i = 0; i < rotate; i++) {
        wp = { y: wp.x, x: -wp.y };
      }
    }

    if (action === 'F') {
      pos.x += arg * wp.x;
      pos.y += arg * wp.y;
    }

    if (action === 'N') wp.y -= arg;
    if (action === 'S') wp.y += arg;
    if (action === 'E') wp.x += arg;
    if (action === 'W') wp.x -= arg;
  });

  return U.manhattan({ x: 0, y: 0 }, pos);
}
