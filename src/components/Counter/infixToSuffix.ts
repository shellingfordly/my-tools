import Nzh from "nzh";

export const Single: any = {
  "+": 1,
  "-": 1,
  "*": 2,
  x: 2,
  "/": 2,
  "(": 3,
  ")": -1,
  加: 1,
  减: 1,
  乘: 2,
  除: 2,
  左括号: 3,
  右括号: -1,
};

export function infixToSuffix(value: string) {
  const list = handleValue(value);

  const stack: string[] = [];
  const output: string[] = [];

  for (let i = 0; i < list.length; i++) {
    const str = list[i];
    if (!str) continue;
    const index = Single[str];
    if (!!index) {
      let topValue = stack.pop() || "";
      let topIndex = Single[topValue];
      if (topIndex === undefined) {
        stack.push(str);
        continue;
      }

      if (index > topIndex || topIndex === 3) {
        stack.push(topValue);
        stack.push(str);
        continue;
      } else {
        while (topIndex && index <= topIndex) {
          if (topIndex < 3) output.push(topValue);
          topValue = stack.pop() || "";
          topIndex = Single[topValue];
          // 处理括号
          // topIndex === 3 标识 符号 栈顶 为 (
          // index > 0 表示 当前检索 符号 不为 )
          // 由于符号 不为 ) 时，pop掉的 ( 需要加回去
          if (topIndex === 3 && index > 0) {
            stack.push(topValue);
            break;
          }
        }
        if (index > 0) stack.push(str);
      }
    } else if (/\d/.test(str)) {
      output.push(str);
    } else {
      output.push(Nzh.cn.decodeS(str));
    }
  }

  return [...output, ...stack.reverse()];
}

function handleValue(value: string) {
  const reg = new RegExp(/(\+|\*|x|\/|\(|\)|\^|加|减|乘|除|左括号|右括号)/g);
  const list = value.replace(/\-/g, "+-").split(reg);

  return list;
}
