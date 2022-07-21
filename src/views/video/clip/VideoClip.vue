<script lang="ts" setup>
import type { FileItem } from "@arco-design/web-vue";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import type { VideoInfoType } from "/@/types/video";
import ClipSetting from "./components/ClipSetting.vue";
import { useVideoClip, ClipImageItem } from "./hooks/useVideoClip";

const fileInfo = ref<VideoInfoType>({} as any);
const imgList = ref<ClipImageItem[]>([]);
const urlList = computed(() => {
  return imgList.value
    .sort((a, b) => a.index - b.index)
    .map((item) => item.url);
});

watch(
  () => fileInfo.value?.file,
  async (file) => {
    const { writeFile, getClipImages } = await useVideoClip();
    await writeFile(file);
    imgList.value = await getClipImages({
      file,
      duration: fileInfo.value.duration,
    });
  },
  { deep: true }
);

async function onChange(_: FileItem[], _file: FileItem) {
  fileInfo.value = await getVideoInfo(_file);
}
</script>

<template>
  <a-upload v-if="!fileInfo.file" draggable action="/" @change="onChange" />
  <div v-else f-ac-jc>
    <video :src="fileInfo?.url" width="300" height="300" autoplay loop></video>
  </div>
  <ClipSetting />
  <div flex flex-wrap>
    <img h-100 v-for="url in urlList" :src="url" alt="" />
  </div>
</template>
