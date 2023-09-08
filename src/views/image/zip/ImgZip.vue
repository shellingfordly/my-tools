<script setup lang="ts">
import axios from "axios";
import { selectFile } from "/@/lib/file/selectFile";
import { Message } from "@arco-design/web-vue";
import { IconLoading } from "@arco-design/web-vue/es/icon";

const file = ref<File>();
const apiKey = import.meta.env.VITE_TINIFY_API_KEY;
const imgUrl = computed(() => file.value && URL.createObjectURL(file.value));
const output = ref<any>({});
const imgSrc = ref("");
const errorMessage = ref("");
const loading = ref(false);

watch(output, () => {
  if (output.value?.url)
    axios
      .get(`/tinify/output/${output.value?.url.split("/").pop()}`, {
        responseType: "arraybuffer",
      })
      .then((res) => {
        const blob = new Blob([res.data], { type: "image/jpeg" }); // 指定 MIME 类型
        imgSrc.value = URL.createObjectURL(blob);
      });
});

async function onUpload() {
  file.value = await selectFile("image");
}

function onZip() {
  loading.value = true;
  if (apiKey && file.value) {
    axios
      .post("/tinify/shrink", file.value, {
        headers: {
          Authorization: "Basic " + btoa(`api:${apiKey}`),
          "Content-Type": "image/jpeg",
        },
      })
      .then((res) => {
        output.value = res?.data?.output;
        loading.value = false;
      })
      .catch((error) => {
        const message: string = error?.response?.data?.message;
        errorMessage.value = message;
        if (message) Message.error(message);
        loading.value = false;
      });
  }
}

function onDownload() {
  if (!imgSrc.value) return;

  const downloadLink = document.createElement("a");

  downloadLink.href = imgSrc.value;
  downloadLink.setAttribute("download", file.value?.name!);
  downloadLink.click();
}

function bytesToKB(bytes?: number) {
  return ((bytes || 0) / 1024).toFixed(2) + " kb";
}
</script>

<template>
  <a-space>
    <a-button @click="onUpload">上传图片</a-button>
    <a-button v-if="imgUrl" @click="onZip">压缩图片</a-button>
    <a-button v-if="imgSrc" @click="onDownload">下载</a-button>
  </a-space>

  <div flex mt-20 border-1 h-500>
    <div w-45vw border-r-1 p-20>
      <div v-if="imgUrl">
        <div pb-10 font-400 fs-20>
          <span>name: </span>
          <span>{{ file?.name }}</span>
        </div>
        <div pb-20 font-400 fs-20>
          <span>size: </span>
          <span>{{ bytesToKB(file?.size) }}</span>
        </div>
        <img max-w-full max-h-460 :src="imgUrl" alt="" />
      </div>
    </div>
    <div flex-1 p-20>
      <div v-if="loading" w-full h-full flex justify-center items-center>
        <IconLoading size="50" />
      </div>
      <div v-if="imgSrc || errorMessage">
        <div pb-10 font-400 fs-20>
          <span>name: </span>
          <span>{{ file?.name }}</span>
        </div>
        <div pb-20 font-400 fs-20>
          <span>size: </span>
          <span>{{ bytesToKB(output?.size) }}</span>
        </div>
        <img v-if="imgSrc" max-w-full max-h-460 :src="imgSrc" alt="" />
        <span v-else>{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>
