import _, { isFinite } from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n');

  return lines;
}

export function solvePart1(input) {
  let answer = 0;
  const grid = U.Grid.fromInput(input);

  for (let y = 0; y < grid.height(); y++) {
    let numStart: number | undefined = undefined;
    let numEnd: number | undefined = undefined;

    for (let x = 0; x < grid.width(); x++) {
      if (isFinite(Number(grid[x][y]))) {
        numStart = numStart == undefined ? x : numStart;
        numEnd = x;
      }

      if (!isFinite(Number(grid[x][y])) || x === grid.width() - 1) {
        if (numStart != undefined && numEnd != undefined) {
          const line = grid.line(y).join('');
          const number = Number(line.substring(numStart, numEnd + 1));

          let isPart = false;
          for (let i = numStart; i <= numEnd; i++) {
            const neighbors = grid.neighbors8(i, y);
            if (
              neighbors.some((n) => {
                const val = grid[n.x][n.y];
                // console.log('check', number, val, val !== '.' && !isFinite(Number(val)));
                return val !== '.' && !isFinite(Number(val));
              })
            ) {
              isPart = true;
            }
          }

          // console.log(number, isPart);
          if (isPart) {
            answer += number;
          } else {
            // console.log('not a part', number);
            // for (let i = numStart; i <= numEnd; i++) {
            //   const neighbors = grid.neighbors8(i, y);
            //   neighbors.forEach((n) => {
            //     const val = grid[n.x][n.y];
            //     console.log('neighbor', n.x, n.y, val);
            //   });
            // }
          }

          numStart = undefined;
          numEnd = undefined;
        }
      }
    }
  }

  return answer;
}

export function solvePart2(input) {
  input = parseInput(input);
}
