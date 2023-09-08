<script lang="ts" setup>
import type { FileItem } from "@arco-design/web-vue";
import type { FileInfoType, ClipImageItem } from "/@/types";
import { getVideoInfo } from "/@/lib/video/getVideoInfo";
import ClipSetting from "./components/ClipSetting.vue";

const fileInfo = ref<FileInfoType>({} as any);
const thumbnails = ref<ClipImageItem[]>([]);
const clipFileUrl = ref("");
const visible = ref(false);

const { writeFile, getClipImages } = useVideoClip();

async function handleThumbnails() {
  const { file, duration } = unref(fileInfo);
  await writeFile(file);
  getClipImages({
    filename: file.name,
    duration: duration!,
    imgs: thumbnails.value,
  });
}

async function onChange(_: FileItem[], _file: FileItem) {
  fileInfo.value = await getVideoInfo(_file);
  handleThumbnails();
}

function onPreview(url: string) {
  clipFileUrl.value = url;
  visible.value = true;
}
</script>

<template>
  <a-upload v-if="!fileInfo.file" draggable action="/" @change="onChange" />
  <div v-else f-ac-jc>
    <video :src="fileInfo?.url" width="700" autoplay loop></video>
  </div>
  <ClipSetting :imgs="thumbnails" :fileInfo="fileInfo" @preview="onPreview" />
  <a-modal
    :visible="visible"
    :title="fileInfo?.file?.name"
    @cancel="visible = false"
    :footer="false"
  >
    <video :src="clipFileUrl" width="700" autoplay loop></video>
  </a-modal>
</template>
