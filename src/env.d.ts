/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "relationship.js" {
  interface OptionsType {
    text: string; //目标对象：目标对象的称谓汉字表达，称谓间用‘的’字分隔
    target?: string; //相对对象：相对对象的称谓汉字表达，称谓间用‘的’字分隔，空表示自己
    sex?: -1 | 0 | 1; //本人性别：0表示女性,1表示男性
    type?: "default" | "chain"; //转换类型：'default'计算称谓,'chain'计算关系
    reverse?: boolean; //称呼方式：true对方称呼我,false我称呼对方
    mode?: "default";
  }
  const result: string[];
  export default (options: OptionsType) => result;
}

declare const Comlink;
