const counterFn = {
  add: (a: number, b: number) => a + b,
  minus: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

export const counterMap: any = {
  "+": counterFn.add,
  "-": counterFn.minus,
  "*": counterFn.multiply,
  x: counterFn.multiply,
  "/": counterFn.divide,
  加: counterFn.add,
  减: counterFn.minus,
  乘: counterFn.multiply,
  除: counterFn.divide,
};

export function counter(list: string[]) {
  console.log("list", list);

  const stack: number[] = [];
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    const value = list[i];
    if (/\d/.test(value)) {
      stack.push(Number(value));
    } else {
      const a = stack.pop() || 0;
      const b = stack.pop() || 0;
      const res = counterMap[value](b, a);
      stack.push(res);
      result = res;
    }
  }
  return result;
}
