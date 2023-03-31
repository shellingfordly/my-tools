<script setup lang="ts">
import { selectFile } from "/@/lib/file/selectFile";
import { getImageInfo } from "/@/lib/video/getVideoInfo";
import { FileInfoType } from "/@/types";
import { useImageClip, PositionType } from "../hoooks/useImageClip";
import ClipSelect from "./ClipSelect.vue";

const imgFile = ref<FileInfoType>({} as any);
const pos = ref<PositionType>();
const newUrl = ref("")

async function onUpload() {
  const file = await selectFile("image");
  const fileInfo = await getImageInfo(file);
  imgFile.value = fileInfo
}

const onClip = () => {
  const { url, width, height } = unref(imgFile)

  const img = new Image()
  img.src = url

  img.onload = async () => {
    const res = await useImageClip({
      width, height,
      img,
      pos: unref(pos)!
    })
    newUrl.value = window.URL.createObjectURL(res as Blob);
  }
};


</script>

<template>
  <a-space mb-20>
    <a-button @click="onUpload">上传图片</a-button>
    <a-button @click="onClip">裁剪</a-button>
  </a-space>

  <div flex>
    <clip-select flex-1 :img-url="imgFile.url" @change="pos = $event" />
    <div w-400 p-20>
      <img :src="newUrl" alt="">
    </div>
  </div>
</template>