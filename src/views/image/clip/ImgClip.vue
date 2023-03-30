<script setup lang="ts">
import { useDraggable, Position } from "@vueuse/core";
import { useImageClip } from "./useImageClip";
import { selectFile } from "/@/lib/file/selectFile";
import { useImageMove, useScale } from "./useImageMove";

const pos = reactive({
  x: 0,
  y: 0,
  w: 300,
  h: 300,
});
const canvasRef = ref();
// 移动目标的容器element对象
const containerRef = ref();
// 移动目标element对象
const targetRef = ref();
const scaleRef = ref();

const { x, y } = useImageMove(containerRef, targetRef);
const { rect } = useScale(scaleRef, {
  initialValue: {
    w: pos.w,
    h: pos.h,
  },
});

watchEffect(() => {
  pos.x = x.value;
  pos.y = y.value;
  pos.w = rect.w;
  pos.h = rect.h;
});

async function onUpload() {
  const file = await selectFile("image");
  await useImageClip(canvasRef.value, file);
}
</script>

<template>
  <a-button @click="onUpload">上传图片</a-button>
  <!-- <canvas ref="canvasRef" /> -->

  <div relative h-500px w-400px>
    <div ref="containerRef" class="container" absolute overflow-visible>
      <div
        class="w-100% h-100% absolute bg-black opacity-1 z-3"
        clip-path="url(#svgClipPath)"
      ></div>
      <img
        src="./img.jpg"
        filter="url(#myFilter)"
        clip-path="url(#svgClipPath)"
      />
    </div>
    <div absolute overflow-visible z-2>
      <svg overflow-visible cursor-pointer height="500px" width="400">
        <defs>
          <mask id="svgClipPath">
            <rect
              :x="pos.x"
              :y="pos.y"
              :width="pos.w"
              :height="pos.h"
              fill="white"
            ></rect>
          </mask>
        </defs>
        <image
          width="100%"
          xlink:href="./img.jpg"
          clip-path="url(#svgClipPath)"
        />
        <rect
          ref="targetRef"
          class="main"
          cursor-move
          :x="pos.x"
          :y="pos.y"
          :width="pos.w"
          :height="pos.h"
        ></rect>

        <g ref="scaleRef">
          <svg overflow-visible cursor-nwse-resize class="handle">
            <circle
              :cx="pos.x"
              :cy="pos.y"
              r="6"
              cursor-nwse-resize
              fill="rgb(255, 255, 255)"
            ></circle>
            <circle
              :cx="pos.x"
              :cy="pos.y"
              r="6"
              fill="rgb(255, 255, 255)"
              cursor-nwse-resize
            ></circle>
          </svg>
          <svg overflow-visible cursor-nesw-resize class="handle">
            <circle
              :cx="pos.x + pos.w"
              :cy="pos.y"
              r="6"
              fill="rgb(255, 255, 255)"
            ></circle>
            <circle
              :cx="pos.x + pos.w"
              :cy="pos.y"
              r="6"
              fill="rgb(255, 255, 255)"
            ></circle>
          </svg>
          <svg overflow-visible cursor-nesw-resize class="tr handle">
            <circle
              :cx="pos.x"
              :cy="pos.y + pos.h"
              r="6"
              fill="rgb(255, 255, 255)"
            ></circle>
            <circle
              :cx="pos.x"
              :cy="pos.y + pos.h"
              r="6"
              fill="rgb(255, 255, 255)"
            ></circle>
          </svg>
          <svg overflow-visible cursor-nwse-resize class="tr handle">
            <circle
              :cx="pos.x + pos.w"
              :cy="pos.y + pos.h"
              r="6"
              fill="rgb(255, 255, 255)"
            ></circle>
            <circle
              :cx="pos.x + pos.w"
              :cy="pos.y + pos.h"
              r="6"
              fill="rgb(255, 255, 255)"
            ></circle>
          </svg>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    clip-path: url(#svgClipPath);
  }
}

.main {
  stroke: rgb(69, 211, 174);
  stroke-width: var(--rect-stroke-width);
  transition: stroke 100ms linear 0s;
  fill: rgba(0, 0, 0, 0);
}
</style>
