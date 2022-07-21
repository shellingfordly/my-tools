<script lang="ts" setup>
import type { FileItem } from "@arco-design/web-vue";
import type { VideoInfoType, ClipImageItem } from "/@/types";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import ClipSetting from "./components/ClipSetting.vue";

const fileInfo = ref<VideoInfoType>({} as any);
const imgList = ref<ClipImageItem[]>([]);
const urlList = computed(() => {
  return imgList.value
    .sort((a, b) => a.index - b.index)
    .map((item) => item.url);
});
const clipUrl = ref("");

const { writeFile, getClipImages, getClipVideo } = useVideoClip();

// watch(
//   () => fileInfo.value?.file,
//   async (file) => {
//     await writeFile(file);
//     imgList.value = await getClipImages({
//       file,
//       duration: fileInfo.value.duration,
//     });
//   },
//   { deep: true }
// );

async function onChange(_: FileItem[], _file: FileItem) {
  fileInfo.value = await getVideoInfo(_file);
}

async function onExport(c: any) {
  console.log("c", c);
  await writeFile(fileInfo.value?.file);
  const url = await getClipVideo({
    fileName: fileInfo.value.file.name,
    frameRate: 3,
    ...c,
  });
  url && (clipUrl.value = url);

  console.log("url", url);
}
</script>

<template>
  <a-upload v-if="!fileInfo.file" draggable action="/" @change="onChange" />
  <div v-else f-ac-jc>
    <video :src="fileInfo?.url" width="300" height="300" autoplay loop></video>
  </div>
  <ClipSetting @export="onExport" />
  <div flex flex-wrap>
    <img h-100 v-for="url in urlList" :src="url" alt="" />
  </div>

  <video
    v-if="clipUrl"
    :src="clipUrl"
    width="300"
    height="300"
    autoplay
    loop
  ></video>
</template>
