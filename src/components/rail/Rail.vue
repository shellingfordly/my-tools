<script lang="ts" setup>
import { PropType } from "vue";
import { formatNumber } from "/@/lib/utils";

const props = defineProps({
  imgs: {
    type: Array as PropType<string[]>,
    default: [],
  },
  duration: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["change"]);
const railContainerRef = ref<HTMLDivElement>();
const barX = reactive<[number, number]>([0, 0]);
const index = ref(-1);
const clientRect = ref<DOMRect>();
const ContainerBorder = 5;

watch(barX, () => {
  const time = barX
    .map((x) => {
      const _x = x && x + ContainerBorder;
      const length = unref(clientRect)?.width!;
      return formatNumber((_x / length) * props.duration, 2);
    })
    .sort((a, b) => a - b);
  emit("change", time);
});

onMounted(() => {
  document.addEventListener("mouseup", () => {
    index.value = -1;
  });
  if (!railContainerRef) return;
  clientRect.value = unref(railContainerRef)?.getBoundingClientRect();
  barX[1] = clientRect.value?.width! - ContainerBorder;
});

function setX(x: number) {
  const rect = unref(clientRect)!;
  if (x >= rect.width + rect.left - ContainerBorder) {
    return rect.width - ContainerBorder;
  } else if (x <= rect.left) {
    return 0;
  } else {
    return x - (rect.left || 0);
  }
}

function mousemove(e: MouseEvent) {
  if (index.value >= 0) {
    barX[index.value] = setX(e.pageX);
  }
}

function mousedown(i: number) {
  index.value = i;
}
</script>

<template>
  <div
    ref="railContainerRef"
    class="railContainer"
    @mousemove="mousemove"
    @mouseup="index = -1"
  >
    <div flex overflow>
      <img
        :style="{ width: `${100 / 8}%` }"
        v-for="url in imgs"
        :src="url"
        draggable="false"
      />
    </div>
    <div
      b-l-red
      v-for="i in [0, 1]"
      :key="i"
      class="sliderBar"
      @mousedown="() => mousedown(i)"
      :style="{ left: barX[i] + 'px', borderLeftWidth: ContainerBorder + 'px' }"
    />
  </div>
</template>

<style scoped lang="less">
.railContainer {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #aaa;

  img {
    user-select: none;
  }

  .sliderBar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    cursor: move;
  }
}
</style>
