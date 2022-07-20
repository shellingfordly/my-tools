<script lang="ts" setup>
import type { FileItem } from "@arco-design/web-vue";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import type { VideoInfoType } from "/@/types/video";
import ClipSetting from "./components/ClipSetting.vue";

const file = ref<VideoInfoType>();

async function onChange(_: FileItem[], _file: FileItem) {
  file.value = await getVideoInfo(_file);
}
</script>

<template>
  <a-upload v-if="!file" draggable action="/" @change="onChange" />
  <div v-else f-ac-jc>
    <video :src="file?.url" width="300" height="300" autoplay loop></video>
  </div>
  <ClipSetting />
</template>
