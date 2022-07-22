<script lang="ts" setup>
const workerSource = `
importScripts("http://localhost:3080/my-tools/comlink.umd.js");

Comlink.expose({
  getDate(e) {
    return e;
  },
});`;

const blob = new Blob([workerSource], { type: "text/javascript" });
const loadableUrl = URL.createObjectURL(blob);
const worker = new Worker(loadableUrl, { name: "workerTest" });
const cw = Comlink.wrap(worker);

onMounted(async () => {
  console.log("cw.getDate()", await cw.getDate(1111));
});
</script>

<template>
  <div>Demo</div>
</template>
