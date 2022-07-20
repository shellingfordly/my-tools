<script lang="ts" setup>
const emit = defineEmits(["setting"]);

const config = reactive({
  rangeStart: 0,
  rangeEnd: 0,
  output: "",
  fileType: "",
});
</script>

<template>
  <div f-ac-jc mt-20 b-1 b-b-0 h-100>
    <Rail />
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
  </div>
</template>
