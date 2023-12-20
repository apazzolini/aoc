import _ from 'lodash'; // eslint-disable-line
import * as U from '../../utils'; // eslint-disable-line

function parseInput(input) {
  const lines = input.split('\n\n');
  let [numbers, ...boards] = lines;
  numbers = numbers.split(',').map(Number);
  boards = boards.map((b) => {
    const rows = b.split('\n');
    const grid = new U.Grid(5, 5, undefined, {
      padSize: 5,
      valueFormatter: (e) => `${e.marked ? '*' : ' '}${e.val}`,
    });

    rows.forEach((l, y) => {
      U.extractNumbers(l).forEach((c, x) => {
        grid[x][y] = { val: Number(c), marked: false };
      });
    });

    return grid;
  });
  return [numbers, boards];
}

function checkWinner(board) {
  for (let x = 0; x < board.length; x++) {
    let allMarked = true;

    for (let y = 0; y < board[0].length; y++) {
      allMarked = allMarked && board[x][y].marked;
    }

    if (allMarked) {
      return true;
    }
  }

  for (let y = 0; y < board[0].length; y++) {
    let allMarked = true;

    for (let x = 0; x < board.length; x++) {
      allMarked = allMarked && board[x][y].marked;
    }

    if (allMarked) {
      return true;
    }
  }

  return false;
}

function playNumber(boards, number) {
  for (const board of boards) {
    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[0].length; y++) {
        if (board[x][y].val === number) {
          board[x][y].marked = true;
        }
      }
    }
  }

  let winningBoards = [];
  for (const board of boards) {
    if (checkWinner(board)) {
      winningBoards.push(board);
    }
  }
  return winningBoards;
}

export function solvePart1(input) {
  let [numbers, boards] = parseInput(input);

  for (const number of numbers) {
    const winners = playNumber(boards, number);
    if (winners.length) {
      const [winner] = winners;
      let unmarkedSum = 0;
      for (let x = 0; x < winner.length; x++) {
        for (let y = 0; y < winner[0].length; y++) {
          if (!winner[x][y].marked) {
            unmarkedSum += winner[x][y].val;
          }
        }
      }
      return unmarkedSum * number;
    }
  }
}

export function solvePart2(input) {
  let [numbers, boards] = parseInput(input);

  for (const number of numbers) {
    let winners = playNumber(boards, number);

    if (winners.length && boards.length === 1) {
      const [winner] = winners;
      let unmarkedSum = 0;
      for (let x = 0; x < winner.length; x++) {
        for (let y = 0; y < winner[0].length; y++) {
          if (!winner[x][y].marked) {
            unmarkedSum += winner[x][y].val;
          }
        }
      }
      return unmarkedSum * number;
    } else if (winners.length) {
      boards = boards.filter((b) => !winners.includes(b));
    }
  }

  boards[0].print();
}
