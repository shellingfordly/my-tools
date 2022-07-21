# Counter

## split

split 支持正则表达式分割

- 用匹配项分割

```js
const str = "1.2.3.4";
str.split(/\d/); // ['', '.', '.', '.', '']
```

- 用匹配项分割，同时收集匹配项

```js
str.split(/(\d)/); // ['', '1', '.', '2', '.', '3', '.', '4', '']
```

- 用匹配项分割，不收集匹配项

```js
str.split(/(?:\d)/); // ['', '.', '.', '.', '']
```

## 逆波兰表达式

> 后缀表达式

- 中缀表达式转换后缀表达式

遇数字进入输出栈，遇操作符进入符号栈；

遍历的当前操作符优先级比栈顶的操作符优先级高时，直接入栈；

反之当前较低或者是相等时，栈顶操作符取出入输出栈，同理继续取出栈顶操作符比较，最后将当前操作符入栈

遇到左括号直接入栈，后续同上；当遇到右括号时，持续将操作符栈顶元素出栈，知道左括号；

之后继续重复上述操作