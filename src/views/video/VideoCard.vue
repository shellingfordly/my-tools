<script lang="ts" setup>
import { FileType } from "/@/hooks/useFFmpeg";

defineProps<{
  url: string;
  type: FileType;
}>();

const visible = ref(false);
</script>

<template>
  <div class="card">
    <div class="file">
      <img v-if="type === 'gif'" :src="url" />
      <video v-else :src="url" autoplay loop />
    </div>
    <div class="info">
      <a-button type="outline" @click="visible = true"> 预览 </a-button>
      <a-button type="primary" :href="url" :download="`output.${type}`">
        下载
      </a-button>
    </div>
  </div>

  <a-modal
    :title="`output.${type}`"
    :visible="visible"
    :footer="false"
    @cancel="visible = false"
    width="80%"
  >
    <img v-if="type === 'gif'" :src="url" />
    <video v-else :src="url" autoplay loop />
  </a-modal>
</template>

<style scoped lang="less">
img,
video {
  width: 100%;
}
.card {
  display: flex;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 10px;

  .file {
    width: calc(100% - 200px);
    padding: 10px;
    display: flex;
    justify-content: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;

    button {
      margin-bottom: 20px;
    }

    button,
    a {
      width: 100px;
    }
  }
}
</style>
