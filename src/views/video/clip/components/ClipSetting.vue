<script lang="ts" setup>
import type { ClipImageItem, VideoInfoType } from "/@/types";

const emit = defineEmits(["preview", "export"]);
const props = defineProps<{
  fileInfo: VideoInfoType;
  imgs: ClipImageItem[];
}>();
const urls = computed(() =>
  props.imgs.sort((a, b) => a.index - b.index).map((item) => item.url)
);
const data = computed(() => [
  {
    label: "文件名",
    value: String(props.fileInfo.file.name),
  },
  {
    label: "宽度",
    value: String(props.fileInfo.width),
  },
  {
    label: "高度",
    value: String(props.fileInfo.height),
  },
  {
    label: "时长",
    value: String(props.fileInfo.duration),
  },
]);
const config = reactive({
  rangeStart: 0,
  rangeEnd: 0,
  output: "output",
  fileType: "mp4",
  width: -1,
  height: -1,
  frameRate: 25,
});
const { getClipVideo } = useVideoClip();
let url: string | null = null;

function onChangeTime(time: [number, number]) {
  config.rangeStart = time[0];
  config.rangeEnd = time[1];
}

async function onPreview() {
  const file = props.fileInfo.file;
  if (!file) return;
  url = await getClipVideo({
    ...config,
    fileName: file.name,
    frameRate: 3,
    width: -1,
    height: -1,
  });
  emit("preview", url);
}

function onExport() {
  if (!url) return;
  const a = document.createElement("a");
  a.href = url;
  a.download = "output.mp4";
  a.click();
}
</script>

<template>
  <div f-ac-jc mt-20 b-1 b-b-0 h-100>
    <Rail :duration="fileInfo.duration" :imgs="urls" @change="onChangeTime" />
  </div>
  <div flex b-1 p-20>
    <div w-400 b-r-1>
      <a-descriptions :data="data" title="文件信息" size="small" :column="1" />
    </div>
    <div p-20>
      <ul f-jb>
        <li wp-25 pr-20>
          <div f-ac mb-20>
            <span w-120>开始时间</span>
            <a-input-number :min="0" v-model="config.rangeStart" />
          </div>
          <div f-ac mb-20>
            <span w-120>结束时间</span>
            <a-input-number :min="0" v-model="config.rangeEnd" />
          </div>
        </li>
        <li wp-25 pr-20>
          <div f-ac mb-20>
            <span w-70>帧数</span>
            <a-input-number v-model="config.frameRate" />
          </div>
          <div f-ac mb-20>
            <!-- <span w-70>高度</span> -->
            <!-- <a-input-number /> -->
          </div>
        </li>
        <li wp-25 pr-20>
          <div f-ac mb-20>
            <span w-70>宽度</span>
            <a-input-number :min="-1" v-model="config.width" />
          </div>
          <div f-ac mb-20>
            <span w-70>高度</span>
            <a-input-number :min="-1" v-model="config.height" />
          </div>
        </li>
        <li wp-25>
          <div f-ac mb-20>
            <span w-110>导出名</span>
            <a-input v-model="config.output" />
          </div>
          <div f-ac mb-20>
            <span w-110>导出格式</span>
            <a-input v-model="config.fileType" />
          </div>
        </li>
      </ul>
      <div f-jc>
        <a-button @click="onPreview" mr-20> 预览 </a-button>
        <a-button @click="onExport"> 导出 </a-button>
      </div>
    </div>
  </div>
</template>
