// Returns Array<Number>
// Deprecated
export function linesToNumbers(input) {
  return input.split('\n').map(Number);
}

// Returns Array<Number> of every number found in the line
export function extractNumbers(str, commasAreSeparators = false): number[] {
  const regex = commasAreSeparators ? /-?[0-9.]+/g : /-?[0-9.,]+/g;
  return (str.match(regex) || []).map((n) => n.replace(/,/g, '')).map(Number);
}

// Returns Array<Number> of every digit found in the line
export function extractDigits(str) {
  const regex = /-?[0-9]/g;
  return (str.match(regex) || []).map((n) => n.replace(/,/g, '')).map(Number);
}

// Returns true if given Object has some key with a value matching val
export function hasVal(obj, val) {
  return Object.values(obj).some((v) => v === val);
}

// For trimming the example inputs in test files
export function trim(str) {
  return str
    .split('\n')
    .map((l) => l.replace(/^\s*/, ''))
    .filter((l) => l !== '')
    .join('\n');
}

// Manhattan distance between pairs of { x: Number, y: Number } objects
export function manhattan(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// Character-wise replacement of corresponding characters
// translate('abaabbba', 'ab', 'cd') --> 'cdccdddc'
export function translate(str: string, from: string, to: string) {
  const lookups = from.split('').reduce((acc, char, idx) => {
    acc[char] = to[idx];
    return acc;
  }, {});

  let answer: string[] = [];
  for (let i = 0; i < str.length; i++) {
    answer[i] = lookups[str[i]] || str[i];
  }
  return answer.join('');
}

// Cycle array forever. Usage:
// for (const elem of cycle(arr)) {
//   console.log(elem)
// }
export function* cycle(arr) {
  let idx = 0;
  while (true) {
    yield arr[idx];
    idx = (idx + 1) % arr.length;
  }
}

export function xor(a, b) {
  return a ? !b : !!b;
}

// Extract consecutives of an array with overlaps. Usage:
// for (const [a, b, c] of consecutives(arr, 3)) {
//   console.log(elem)
// }
export function consecutives(arr: any[], n = 2) {
  const result: any[] = [];

  for (let i = 0; i < arr.length - n + 1; i++) {
    result.push([arr.slice(i, i + n), i]);
  }

  return result;
}
