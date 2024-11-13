<script lang="ts" setup>
const props = defineProps({
  url: { type: String },
  text: { type: String, default: "下载" },
  name: { type: String },
  fileType: {
    type: String,
    default: "png",
  },
});

const fileName = computed(() => `${props.name || Date()}.${props.fileType}`);
</script>

<template>
  <a-button w-60 size="small" type="primary" :href="url" :download="fileName">
    {{ text }}
  </a-button>
</template>
