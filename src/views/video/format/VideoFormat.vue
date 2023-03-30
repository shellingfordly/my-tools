<!-- 视频格式转换 -->
<script lang="ts" setup>
import { selectFile } from "/@/lib/file/selectFile";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import FormatSetting from "./components/FormatSetting.vue";
import FormatCard from "./components/FormatCard.vue";
import { ExportFileType, VideoInfoType } from "/@/types";

const fileList = reactive<VideoInfoType[]>([]);
const file = ref<VideoInfoType>({} as any);
const resList = reactive<ExportFileType[]>([]);

async function onClick() {
  const _file = await selectFile("video");
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
  <div flex b-1>
    <div wp-50 p-20 b-r-1>
      <FormatSetting :fileInfo="file" @change="onChange" />
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
      <FormatCard :file="item" v-for="item in resList" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.video-box {
  @apply f-jc p-10 b-1 b-rd-10 cursor-pointer mb-10;

  &:hover {
    border-color: rgb(var(--primary-6));
  }
}

.selected {
  border-color: rgb(var(--primary-6));
}
</style>
