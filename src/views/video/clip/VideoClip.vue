<script lang="ts" setup>
import type { FileItem } from "@arco-design/web-vue";
import type { VideoInfoType, ClipImageItem } from "/@/types";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import ClipSetting from "./components/ClipSetting.vue";

const fileInfo = ref<VideoInfoType>({} as any);
const thumbnails = ref<ClipImageItem[]>([]);
const clipFileUrl = ref("");

const { writeFile, getClipImages } = useVideoClip();

watch(
  () => fileInfo.value?.file,
  async (file) => {
    await writeFile(file);
    thumbnails.value = await getClipImages({
      filename: file.name,
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
    <video :src="fileInfo?.url" width="700" autoplay loop></video>
  </div>
  <ClipSetting
    :imgs="thumbnails"
    :fileInfo="fileInfo"
    @preview="(url) => (clipFileUrl = url)"
  />
</template>
