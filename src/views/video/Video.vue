<script lang="ts" setup>
import { selectFile } from "/@/lib/file/selectFile";
import { getVideoInfo, VideoInfoType } from "/@/lib/video/getVideoInfo";
import VideoSetting from "./VideoSetting.vue";
import VideoCard from "./VideoCard.vue";
import { FileType } from "/@/hooks/useFFmpeg";

const fileList = reactive<VideoInfoType[]>([]);
const selectedFile = ref<VideoInfoType>({} as any);
const resList = reactive<{ url: string; type: FileType }[]>([]);

async function onClick() {
  const file = await selectFile();
  const fileInfo = await getVideoInfo(file);
  onSelected(fileInfo);
  fileList.push(fileInfo);
}

function onSelected(f: VideoInfoType) {
  selectedFile.value = f;
}

function onChange(file: any) {
  resList.push(file);
}
</script>

<template>
  <div class="header">
    <a-button @click="onClick" type="primary">上传文件</a-button>
  </div>
  <div class="content">
    <div class="left">
      <VideoSetting :fileInfo="selectedFile" @change="onChange" />
      <div
        :class="['video-box', selectedFile.id === file.id && 'selected']"
        v-for="file in fileList"
        :key="file.id"
        @click="onSelected(file)"
      >
        <video :src="file.url" autoplay loop></video>
      </div>
    </div>
    <div class="right">
      <video-card :url="item.url" :type="item.type" v-for="item in resList" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  padding: 20px;
}
.content {
  display: flex;
  width: 100%;
  border: 2px solid #eee;

  .left,
  .right {
    width: 50%;
    padding: 20px;
  }

  .left {
    border-right: 2px solid #eee;

    .video-box {
      padding: 10px;
      border: 2px solid #eee;
      border-radius: 10px;
      cursor: pointer;
      margin-bottom: 10px;

      video {
        width: 100%;
        height: 300px;
      }

      &:hover {
        border: 2px dashed rgb(var(--primary-6));
      }
    }

    .selected {
      border: 2px solid rgb(var(--primary-6));
    }
  }
}
</style>
