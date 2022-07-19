import { counter } from "./counter";
import { infixToSuffix } from "./infixToSuffix";
import type { MaybeRef } from "/@/types/common";

export function mathExpressionCounter(value: MaybeRef<string>) {
  return counter(infixToSuffix(unref(value)));
}
