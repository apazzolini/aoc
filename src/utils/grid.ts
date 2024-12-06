import _ from 'lodash'; // eslint-disable-line

type GridOpts = {
  padSize: number;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  valueFormatter?: (any) => any;
};
export class Grid<T> extends Array<Array<T>> {
  opts: GridOpts;

  constructor(sizeX: number, sizeY: number, fill?: T, opts = {}) {
    super(sizeX);

    for (let i = 0; i < this.length; i++) {
      this[i] = new Array(sizeY).fill(fill);
    }

    this.opts = {
      padSize: 0,
      minX: 0,
      minY: 0,
      maxX: sizeX,
      maxY: sizeY,
      ...opts,
    };
  }

  print({
    padSize = this.opts.padSize,
    minX = this.opts.minX,
    minY = this.opts.minY,
    maxX = this.opts.maxX,
    maxY = this.opts.maxY,
  } = {}) {
    let str = '\n';

    _.range(minY, maxY).forEach((y) => {
      _.range(minX, maxX).forEach((x) => {
        const val = this.opts.valueFormatter?.(this[x][y]) ?? this[x][y];
        str += _.pad(val, padSize);
      });
      str += '\n';
    });

    console.log(str);
  }

  copy() {
    const copy = new Grid<T>(this.length, this[0].length, undefined, this.opts);
    for (let x = 0; x < this.length; x++) {
      for (let y = 0; y < this[0].length; y++) {
        copy[x][y] = this[x][y];
      }
    }
    return copy;
  }

  equals(otherGrid: Grid<T>) {
    if (!otherGrid) return false;
    if (this.length !== otherGrid.length) return false;
    if (this[0].length !== otherGrid[0].length) return false;

    for (let x = 0; x < this.length; x++) {
      for (let y = 0; y < this[0].length; y++) {
        if (this[x][y] !== otherGrid[x][y]) {
          return false;
        }
      }
    }

    return true;
  }

  count(val: any) {
    let res = 0;

    for (let x = 0; x < this.length; x++) {
      for (let y = 0; y < this[0].length; y++) {
        if (this[x][y] === val) {
          res++;
        }
      }
    }

    return res;
  }

  neighbors4(x: number, y: number) {
    const res: Array<{ x: number; y: number }> = [];

    if (x - 1 >= 0) res.push({ x: x - 1, y });
    if (x + 1 < this.length) res.push({ x: x + 1, y });
    if (y - 1 >= 0) res.push({ x, y: y - 1 });
    if (y + 1 < this[0].length) res.push({ x, y: y + 1 });

    return res;
  }

  neighbors8(x: number, y: number) {
    const res: Array<{ x: number; y: number }> = [];

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dy === 0 && dx === 0) continue;
        if (x + dx < 0 || x + dx >= this.length) continue;
        if (y + dy < 0 || y + dy >= this[0].length) continue;

        res.push({ x: x + dx, y: y + dy });
      }
    }

    return res;
  }

  line(y: number) {
    const res = new Array(this.width());
    for (let x = 0; x < this.width(); x++) {
      res[x] = this[x][y];
    }
    return res;
  }

  // get length() {
  //   return this.grid.length;
  // }

  width() {
    return this.length;
  }

  height() {
    return this[0].length;
  }

  inBounds(x: number, y: number) {
    return !(x < 0 || x >= this.length || y < 0 || y >= this[0].length);
  }

  static fromInput(input: string, defaultOpts?: GridOpts) {
    const lines = input.split('\n');
    const grid = new Grid<string>(lines[0].length, lines.length, undefined, defaultOpts);

    lines.forEach((l, y) => {
      l.split('').forEach((c, x) => {
        grid[x][y] = c;
      });
    });

    return grid;
  }
}
