import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  const contains = {};
  const containedIn = {};

  input.split('\n').forEach((line) => {
    let [, color, children] = line.match(/(.*) bags contain (.*)/);

    contains[color] = [];
    for (let [, num, type] of children.matchAll(/(\d+) (.+?) bags?[,.]/g)) {
      contains[color].push({ num: Number(num), type });
      (containedIn[type] || (containedIn[type] = [])).push(color);
    }
  });

  return { contains, containedIn };
}

export function solvePart1(input) {
  let { containedIn } = parseInput(input);

  function containers(color, set = new Set()) {
    containedIn[color]?.forEach((c) => {
      set.add(c);
      containers(c, set);
    });
    return set;
  }

  return containers('shiny gold').size;
}

export function solvePart2(input) {
  let { contains } = parseInput(input);

  function sumBags(root) {
    return 1 + _.sum(contains[root].map((c) => c.num * sumBags(c.type)));
  }

  return sumBags('shiny gold') - 1;
}
