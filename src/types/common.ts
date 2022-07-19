import type { Ref } from "vue";

export type MaybeRef<T = any> = Ref<T> | T;
