<script lang="ts" setup>
import { IconPlus, IconClose } from "@arco-design/web-vue/es/icon";
import Download from "/@/components/download/Download.vue";

const getBaseJsonData = () => ({
  key: "",
  value: "",
});
const activeKey = ref(0);
const url = ref("");
const text = ref("");
const jsonData = reactive<ReturnType<typeof getBaseJsonData>[]>([
  getBaseJsonData(),
]);
const { createQRCode } = useQRCode();

function onAddAttr() {
  jsonData.push(getBaseJsonData());
}

function onDeleteAttr(index: number) {
  jsonData.splice(index, 1);
}

function onCreateQRCode() {
  const dom = document.getElementById("qrcode");
  if (!dom) return;
  dom.childNodes.forEach((c) => dom.removeChild(c));
  const value = !activeKey.value ? unref(text) : handleJsonData(jsonData);
  createQRCode(dom, value)?.then(() => {
    url.value = (dom.childNodes[1] as HTMLImageElement).src;
  });
}

function handleJsonData(data: typeof jsonData) {
  const json: Record<string, string> = {};
  data.forEach((item) => item.key && (json[item.key] = item.value));
  return JSON.stringify(json);
}
</script>

<template>
  <a-card title="生成二维码">
    <a-row>
      <a-col :span="12" b-r pr-10>
        <a-tabs v-model:active-key="activeKey">
          <a-tab-pane :key="0" title="普通链接/文本">
            <a-textarea v-model="text" h-100 />
          </a-tab-pane>
          <a-tab-pane :key="1" title="JSON格式数据">
            <ul>
              <li v-for="(item, i) in jsonData" f-ac pl-10 pr-10 mb-10>
                <span mr-10>key: </span>
                <a-input v-model="item.key" placeholder="输入key值" />
                <span ml-30 mr-10>value: </span>
                <a-input v-model="item.value" placeholder="输入value值" />
                <icon-close
                  @click="onDeleteAttr(i)"
                  size="50"
                  ml-10
                  cursor-pointer
                />
              </li>
            </ul>
            <div mt-20 f-jc>
              <a-button @click="onAddAttr">
                <template #icon>
                  <icon-plus />
                </template>
              </a-button>
            </div>
          </a-tab-pane>
        </a-tabs>
        <a-button mt-20 w-100 @click="onCreateQRCode" type="primary">
          生成二维码
        </a-button>
      </a-col>
      <a-col :span="12" pl-10 flex-col f-ac-jc>
        <div id="qrcode" mb-20></div>
        <Download :url="url" />
      </a-col>
    </a-row>
  </a-card>
</template>
