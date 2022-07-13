<script lang="ts" setup>
import { useFFmpeg, ConfigType } from "../hooks/useFFmpeg";
import { selectFile } from "../utils/file/selectFile";
import { getVideoSize } from "../utils/video/getVideoSize";
import {
  Button,
  Input,
  Select,
  Option,
  InputNumber,
} from "@arco-design/web-vue";

const boxRef = ref();
const image = ref();
const file = ref<File>();
const progress = ref(0);
const video = ref(false);
const videoConfig = reactive<Required<ConfigType>>({
  frameRate: 25,
  rangeStart: 0,
  rangeEnd: 10,
  width: 0,
  height: 0,
  fileType: "gif",
});

async function onClick() {
  file.value = await selectFile();
  const node = await getVideoSize(file.value);
  video.value = true;
  boxRef.value.appendChild(node.el);
  node.play();
}

async function onChange() {
  if (!file.value) return;

  const res = await useFFmpeg(file.value, videoConfig, (obj: any) => {
    progress.value = Math.floor((obj.time / videoConfig.rangeEnd) * 100);
    console.log("progress", progress.value);
  });
  const url = URL.createObjectURL(new Blob([res], { type: "image/gif" }));
  image.value = url;
}
</script>

<template>
  <div class="container">
    <div class="left">
      <Button @click="onClick" type="primary">上传文件</Button>
      <div v-show="video" class="content" ref="boxRef">
        <div>
          <span>帧数 :</span>
          <InputNumber type="text" v-model="videoConfig.frameRate" />
        </div>
        <div>
          <span>width:</span>
          <InputNumber type="text" v-model="videoConfig.width" />
        </div>
        <div>
          <span>height:</span>
          <InputNumber type="text" v-model="videoConfig.height" />
        </div>
        <div>
          <span>开始时间:</span>
          <InputNumber type="text" v-model="videoConfig.rangeStart" />
        </div>
        <div>
          <span>结束时间:</span>
          <InputNumber type="text" v-model="videoConfig.rangeEnd" />
        </div>
        <div>
          <span>文件格式:</span>
          <Select :style="{ width: '320px' }" v-model="videoConfig.fileType">
            <Option value="gif">gif</Option>
            <Option value="mp4">mp4</Option>
            <Option value="avi">avi</Option>
            <Option value="webm">webm</Option>
            <Option value="mpeg">mpeg</Option>
            <Option value="flv">flv</Option>
          </Select>
        </div>
        <div>
          <Button @click="onChange" type="primary">转换</Button>
        </div>
      </div>
    </div>
    <div>
      <div v-if="progress && progress < 100">loading {{ progress }}%</div>
      <img v-if="image" :src="image" />
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  padding: 20px;
  // > div {
  //   width: 50%;
  // }

  .left {
    margin-right: 20px;
  }

  .content {
    > div {
      display: flex;
      margin-bottom: 10px;

      > span {
        width: 100px;
      }
      > div {
        flex: 1;
      }
    }
  }

  .img {
    width: 500px;
  }
}
</style>
