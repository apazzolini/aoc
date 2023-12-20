import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  let lines = input.split('\n').map((l) => {
    const [, instr, param] = l.match(/(.*) (.*)/);
    return { instr, param: Number(param) };
  });

  return lines;
}

function run(prog) {
  let ptr = 0;
  let acc = 0;
  let seen = [];

  while (true) {
    if (!prog[ptr]) return { halts: true, acc };
    if (seen[ptr]) return { halts: false, acc };

    const { instr, param } = prog[ptr];
    seen[ptr] = true;

    if (instr === 'jmp') {
      ptr += param;
    }

    if (instr === 'acc') {
      acc += param;
      ptr++;
    }

    if (instr === 'nop') {
      ptr++;
    }
  }
}

export function solvePart1(input) {
  let prog = parseInput(input);
  return run(prog).acc;
}

export function solvePart2(input) {
  let prog = parseInput(input);

  for (let i = 0; i < prog.length; i++) {
    let { instr, param } = prog[i];

    if (instr.match(/(nop|jmp)/)) {
      const progCopy = [...prog];
      progCopy[i] = {
        instr: instr === 'nop' ? 'jmp' : 'nop',
        param,
      };

      const result = run(progCopy);
      if (result.halts) return result.acc;
    }
  }
}
