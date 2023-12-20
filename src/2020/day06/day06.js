import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

export function solvePart1(input) {
  return _.sum(
    input.split('\n\n').map((g) => {
      const answers = g.replace(/\n/g, '').split('');
      return _.uniq(answers).length;
    }),
  );
}

export function solvePart2(input) {
  return _.sum(
    input.split('\n\n').map((g) => {
      const answers = g.split('\n').map((p) => p.split(''));
      return _.intersection(...answers).length;
    }),
  );
}
