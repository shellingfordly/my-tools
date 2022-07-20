<!-- 视频格式转换 -->
<script lang="ts" setup>
import { selectFile } from "/@/lib/file/selectFile";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import VideoSetting from "./components/VideoSetting.vue";
import VideoCard from "./components/VideoCard.vue";
import { ExportFileType, VideoInfoType } from "/@/types/video";

const fileList = reactive<VideoInfoType[]>([]);
const file = ref<VideoInfoType>({} as any);
const resList = reactive<ExportFileType[]>([]);

async function onClick() {
  const _file = await selectFile();
  const fileInfo = await getVideoInfo(_file);
  onSelected(fileInfo);
  fileList.push(fileInfo);
}

function onSelected(f: VideoInfoType) {
  file.value = f;
}

function onChange(f: any) {
  resList.push(f);
}
</script>

<template>
  <div mb-20>
    <a-button @click="onClick" type="primary">上传文件</a-button>
  </div>
  <div flex b-2-eee>
    <div wp-50 p-20 br-2-eee>
      <VideoSetting :fileInfo="file" @change="onChange" />
      <div
        :class="['video-box', file.id === f.id && 'selected']"
        v-for="f in fileList"
        :key="f.id"
        @click="onSelected(f)"
      >
        <video :src="f.url" h-300 autoplay loop></video>
      </div>
    </div>
    <div wp-50 p-20 class="right">
      <video-card :file="item" v-for="item in resList" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.video-box {
  @apply f-jc p-10 b-2-eee b-rd-10 cursor-pointer mb-10;

  &:hover {
    border: 2px dashed rgb(var(--primary-6));
  }
}

.selected {
  border-color: rgb(var(--primary-6));
}
</style>
