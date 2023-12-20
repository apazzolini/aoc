class MyArray extends Array<number> {
  constructor() {
    super(3);
  }

  mySort() {
    console.log(this);
  }
}

const x = new MyArray();
x[0] = 3;
x.mySort();
