<script lang="ts" setup>
import { bufferChangeUrl } from "/@/lib/file/handleFile";
import { formatNumber } from "/@/lib/utils";
import type { FFmpegConfig, FileType, FileInfoType } from "/@/types";

const emit = defineEmits(["change"]);
const props = defineProps<{
  fileInfo?: FileInfoType;
}>();

const FileTypeList = ["gif", "mp4", "avi", "webm", "mpeg", "flv"];
const loading = ref(false);
const config = reactive<FFmpegConfig>({
  type: "video",
  outputName: "output",
  filename: "",
  frameRate: 25,
  rangeStart: 0,
  rangeEnd: 10,
  width: 0,
  height: 0,
  fileType: "gif",
});
const percent = ref(0);
const { ffmpeg, writeFile, ffmpegRun } = useFFmpeg();

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

ffmpeg.setProgress(({ time }: any) => {
  const t = time >= 0 ? time : 0;
  percent.value = formatNumber(t / config.rangeEnd!, 2);
});

async function onChange() {
  const file = props.fileInfo?.file;
  if (!file) return;
  loading.value = true;
  await writeFile(file);
  const { url, size } = await ffmpegRun({
    ...config,
    filename: file.name,
  });
  emit("change", {
    url,
    size,
    type: config.fileType,
  });
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
