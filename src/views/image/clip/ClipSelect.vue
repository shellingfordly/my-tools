<script setup lang="ts">
import { useClipSelect, useScale } from "../hoooks/useImageMove";

const emit = defineEmits(["change"])
defineProps<{ imgUrl: string }>();

const pos = reactive({
  x: 50,
  y: 50,
  w: 200,
  h: 200,
});
// 移动目标的容器element对象
const containerRef = ref();
// 移动目标element对象
const targetRef = ref();
const scaleRef = ref();

const { x, y } = useClipSelect(containerRef, targetRef, { x: pos.x, y: pos.y });
const { rect } = useScale(scaleRef, {
  w: pos.w,
  h: pos.h,
});

watchEffect(() => {
  pos.x = x.value;
  pos.y = y.value;
  pos.w = rect.w;
  pos.h = rect.h;

  emit("change", { ...pos })
});
</script>

<template>
  <div relative w-full h-500px overflow-hidden>
    <div ref="containerRef" w-full h-full absolute overflow-visible flex items-center justify-center>
      <img v-if="imgUrl" class="img" :src="imgUrl" filter="url(#myFilter)" mask="url(#svgClipPath)" />
    </div>
    <div w-full h-full absolute overflow-visible z-2>
      <svg ref="containerRef" overflow-visible cursor-pointer height="100%" width="100%">
        <defs>
          <mask id="svgMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect :x="pos.x" :y="pos.y" :width="pos.w" :height="pos.h" fill="black"></rect>
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.7)" mask="url(#svgMask)" />
        <rect ref="targetRef" class="main" cursor-move :x="pos.x" :y="pos.y" :width="pos.w" :height="pos.h"></rect>

        <g ref="scaleRef">
          <svg overflow-visible cursor-nwse-resize class="handle">
            <circle :cx="pos.x" :cy="pos.y" r="6" cursor-nwse-resize fill="rgb(255, 255, 255)"></circle>
            <circle :cx="pos.x" :cy="pos.y" r="6" fill="rgb(255, 255, 255)" cursor-nwse-resize></circle>
          </svg>
          <svg overflow-visible cursor-nesw-resize class="handle">
            <circle :cx="pos.x + pos.w" :cy="pos.y" r="6" fill="rgb(255, 255, 255)"></circle>
            <circle :cx="pos.x + pos.w" :cy="pos.y" r="6" fill="rgb(255, 255, 255)"></circle>
          </svg>
          <svg overflow-visible cursor-nesw-resize class="tr handle">
            <circle :cx="pos.x" :cy="pos.y + pos.h" r="6" fill="rgb(255, 255, 255)"></circle>
            <circle :cx="pos.x" :cy="pos.y + pos.h" r="6" fill="rgb(255, 255, 255)"></circle>
          </svg>
          <svg overflow-visible cursor-nwse-resize class="tr handle">
            <circle :cx="pos.x + pos.w" :cy="pos.y + pos.h" r="6" fill="rgb(255, 255, 255)"></circle>
            <circle :cx="pos.x + pos.w" :cy="pos.y + pos.h" r="6" fill="rgb(255, 255, 255)"></circle>
          </svg>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="less">
.img {
  max-width: 100%;
  max-height: 100%;
}

.main {
  stroke: rgb(69, 211, 174);
  stroke-width: var(--rect-stroke-width);
  transition: stroke 100ms linear 0s;
  fill: rgba(0, 0, 0, 0);
}
</style>
