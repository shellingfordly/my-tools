import { MaybeRef, Position, unrefElement } from "@vueuse/core";
import { useMouse, useDraggable, useEventListener } from "@vueuse/core";

export function useImageMove(
  container: MaybeRef<HTMLElement>,
  target: MaybeRef<HTMLElement>,
  initialValue?: MaybeRef<Position>
) {
  const position = reactive({
    x: 0,
    y: 0,
  });

  if (initialValue) {
    position.x = unref(initialValue).x;
    position.y = unref(initialValue).y;
  }

  useDraggable(target, {
    initialValue: unref(position),
    onMove(_pos) {
      const cRect = unref(container)?.getBoundingClientRect();
      position.x = _pos.x - cRect.left;
      position.y = _pos.y - cRect.top;
    },
  });

  return { ...toRefs(position), position };
}

interface UseScaleOptions {
  initialValue: MaybeRef<{ w: number; h: number }>;
}

export function useScale(
  target: MaybeRef<HTMLElement>,
  options: UseScaleOptions
) {
  const { x, y } = useMouse();
  const isStart = ref(false);
  const startPos = reactive({ x: 0, y: 0 });
  const rect = reactive({ ...unref(options.initialValue) });
  const initialValue = unref(options.initialValue);

  const cleanups: Function[] = [];

  watchEffect(() => {
    if (isStart.value) {
      rect.w = initialValue.w + x.value - startPos.x;
      rect.h = initialValue.h + y.value - startPos.y;
    }
  });

  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      cleanup();
      if (!el) return;
      register();
    }
  );

  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };

  const register = () => {
    const stop1 = useEventListener(target, "mousedown", () => {
      isStart.value = true;
      startPos.x = x.value;
      startPos.y = y.value;
    });
    const stop2 = useEventListener(document, "mouseup", () => {
      isStart.value = false;
      initialValue.w = rect.w;
      initialValue.h = rect.h;
    });
    cleanups.push(stop1, stop2);
  };

  onUnmounted(() => {
    cleanup();
    stopWatch();
  });

  return { ...toRefs(rect), rect };
}
