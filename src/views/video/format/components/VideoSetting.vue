<script lang="ts" setup>
import { formatNumber } from "/@/lib/utils";
import type { VideoConfigType, VideoInfoType } from "/@/types";

const emit = defineEmits(["change"]);
const props = defineProps<{
  fileInfo?: VideoInfoType;
}>();

const FileTypeList = ["gif", "mp4", "avi", "webm", "mpeg", "flv"];
const loading = ref(false);
const config = reactive<Required<VideoConfigType>>({
  frameRate: 25,
  rangeStart: 0,
  rangeEnd: 10,
  width: 0,
  height: 0,
  fileType: "gif",
});
const percent = ref(0);
const { videoFormat, setProgress } = useVideoFormat();

watch(
  () => props.fileInfo,
  (fileInfo) => {
    if (fileInfo) {
      config.width = fileInfo?.width;
      config.height = fileInfo?.height;
      config.rangeEnd = fileInfo?.duration;
    }
  }
);

setProgress(({ time }: any) => {
  const t = time >= 0 ? time : 0;
  percent.value = formatNumber(t / config.rangeEnd, 2);
});

async function onChange() {
  const file = props.fileInfo?.file;
  if (!file) return;
  loading.value = true;
  const buffer = await videoFormat(file, config);

  const type =
    config.fileType === "gif" ? "image/gif" : `video/${config.fileType}`;
  const url = URL.createObjectURL(new Blob([buffer], { type }));

  emit("change", { url, type: config.fileType, size: buffer.byteLength });
  loading.value = false;
}
</script>

<template>
  <div class="setting">
    <div>
      <span>帧数 :</span>
      <a-input-number type="text" v-model="config.frameRate" />
    </div>
    <div>
      <span>宽度:</span>
      <a-input-number type="text" v-model="config.width" />
    </div>
    <div>
      <span>高度:</span>
      <a-input-number type="text" v-model="config.height" />
    </div>
    <div>
      <span>开始时间:</span>
      <a-input-number type="text" v-model="config.rangeStart" />
    </div>
    <div>
      <span>结束时间:</span>
      <a-input-number type="text" v-model="config.rangeEnd" />
    </div>
    <div>
      <span>文件格式:</span>
      <a-select w-320i v-model="config.fileType">
        <a-option :value="item" v-for="item in FileTypeList" :key="item">
          {{ item.toUpperCase() }}
        </a-option>
      </a-select>
    </div>
    <div>
      <a-button :loading="loading" @click="onChange" type="primary" mr-10>
        开始转换
      </a-button>
      <a-progress
        v-show="percent || loading"
        :percent="percent"
        :max="100"
        :min="0"
        w-200i
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.setting {
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    > span:first-child {
      width: 100px;
    }

    span:last-child {
      width: 320px;
    }
  }
}
</style>
