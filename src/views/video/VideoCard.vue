<script lang="ts" setup>
import { ExportFileType } from "/@/types/video";

const props = defineProps<{
  file: ExportFileType;
}>();

const visible = ref(false);
const size = computed(() => (props.file.size / 1000000).toFixed(2));

const form = reactive({
  output: "output",
});
</script>

<template>
  <div class="card">
    <div class="file">
      <img v-if="file.type === 'gif'" :src="file.url" />
      <video v-else :src="file.url" autoplay loop />
    </div>
    <div class="info">
      <div class="title">文件信息</div>
      <a-form :model="form">
        <a-form-item label="大小">
          <a-input :model-value="size" disabled>
            <template #suffix>
              <span>M</span>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item field="output" label="名字">
          <a-input v-model="form.output">
            <template #suffix>
              <span>.{{ file.type }}</span>
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <div class="btn">
        <a-button type="outline" @click="visible = true"> 预览 </a-button>
        <a-button
          type="primary"
          :href="file.url"
          :download="`${form.output}.${file.type}`"
        >
          下载
        </a-button>
      </div>
    </div>
  </div>

  <a-modal
    :title="`output.${file.type}`"
    :visible="visible"
    :footer="false"
    @cancel="visible = false"
    width="80%"
  >
    <img v-if="file.type === 'gif'" :src="file.url" />
    <video v-else :src="file.url" autoplay loop />
  </a-modal>
</template>

<style scoped lang="less">
img,
video {
  width: 100%;
}
.card {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #eee;
  border-radius: 10px;

  .file {
    width: calc(100% - 300px);
    display: flex;
    justify-content: center;
  }
  .info {
    width: 300px;
    padding-left: 50px;

    .title {
      font-size: 20px;
      font-weight: 700;
      line-height: 50px;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-right: 20px;
      }

      button,
      a {
        width: 100px;
      }
    }
  }
}
</style>
