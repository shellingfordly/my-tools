<script lang="ts" setup>
import type { ExportFileType } from "/@/types";

const props = defineProps<{
  file: ExportFileType;
}>();

const visible = ref(false);
const size = computed(() => (props.file.size / 1000000).toFixed(2));

const output = ref("output");
</script>

<template>
  <div flex mb-10 b-1 b-rd-10>
    <div f-ac wp-50 p-10>
      <img v-if="file.type === 'gif'" :src="file.url" wp-100 />
      <video v-else :src="file.url" autoplay loop wp-100 />
    </div>
    <div wp-50 p-10 b-l-1>
      <div fs-20 fw-700 ml-10 mb-10>文件信息</div>
      <a-form
        :model="{}"
        :label-col-props="{ span: 6 }"
        :wrapper-col-props="{ span: 18 }"
      >
        <a-form-item label="大小">
          <a-input :model-value="size" disabled>
            <template #suffix>
              <span>M</span>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item field="output" label="名字">
          <a-input v-model="output">
            <template #suffix>
              <span>.{{ file.type }}</span>
            </template>
          </a-input>
        </a-form-item>
      </a-form>
      <div f-ac-jc>
        <a-button
          w-60
          mr-20
          size="small"
          type="outline"
          @click="visible = true"
        >
          预览
        </a-button>
        <a-button
          w-60
          size="small"
          type="primary"
          :href="file.url"
          :download="`${output}.${file.type}`"
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
