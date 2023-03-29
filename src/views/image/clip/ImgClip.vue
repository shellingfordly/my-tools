<script setup lang="ts">
const pos = reactive({
  x: 40,
  y: 100,
  w: 300,
  h: 300,
});
</script>

<template>
  <div flex>
    <div v-for="(_, key) in pos">
      <span> {{ key }}</span>
      <a-input-number
        type="text"
        v-model:model-value="pos[key]"
        style="width: 100px"
      />
    </div>
  </div>

  <div relative>
    <div class="box" absolute overflow-visible>
      <img class="img" src="./img.jpg" />
    </div>
    <div absolute overflow-visible z-2>
      <svg overflow-visible cursor-pointer height="500px" width="400">
        <defs>
          <clipPath id="svgClipPath">
            <rect :x="pos.x" :y="pos.y" :width="pos.w" :height="pos.h"></rect>
          </clipPath>
        </defs>
        <rect
          class="main"
          cursor-move
          :x="pos.x"
          :y="pos.y"
          :width="pos.w"
          :height="pos.h"
        ></rect>


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
      </svg>
    </div>
  </div>
</template>

<style scoped lang="less">
.box {
  height: 500px;
  width: 400px;
  background-color: darkslategray;
}

.box .img {
  width: 100%;
  height: 100%;
  clip-path: url(#svgClipPath);
}

.main {
  stroke: rgb(69, 211, 174);
  stroke-width: var(--rect-stroke-width);
  transition: stroke 100ms linear 0s;
  fill: rgba(0, 0, 0, 0);
}
</style>
