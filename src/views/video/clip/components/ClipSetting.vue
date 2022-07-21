<script lang="ts" setup>
defineEmits({
  export(c: typeof config) {},
});

const config = reactive({
  rangeStart: 0,
  rangeEnd: 0,
  output: "output",
  fileType: "mp4",
});

function onChangeTime(time: number) {
  config.rangeEnd = time;
}
</script>

<template>
  <div f-ac-jc mt-20 b-1 b-b-0 h-100>
    <Rail @change="onChangeTime" />
  </div>
  <div b-1>
    <div m-auto wp-80 flex p-20>
      <div f-ac wp-50 mr-50>
        <span w-100>开始时间</span>
        <a-input-number v-model="config.rangeStart" />
      </div>
      <div f-ac wp-50>
        <span w-100>结束时间</span>
        <a-input-number v-model="config.rangeEnd" />
      </div>
    </div>
    <div m-auto wp-80 flex p-20>
      <div f-ac wp-50 mr-50>
        <span w-100>导出名</span>
        <a-input v-model="config.output" />
      </div>
      <div f-ac wp-50>
        <span w-100>导出格式</span>
        <a-input v-model="config.fileType" />
      </div>
    </div>
    <div f-jc mb-20>
      <a-button mr-20> 预览 </a-button>
      <a-button @click="$emit('export', config)"> 导出 </a-button>
    </div>
  </div>
</template>
