# Worker

worker 代码内无法跨域，因此去请求 https 请求时会报错

[参考文章](https://support.tuya.com/en/help/_detail/K9mc4d5ay54jm)

```
Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'https://unpkg.com/comlink/dist/umd/comlink.js' failed to load.
```

## 使用

当在本地运行时，`importScripts` 只能获取本地的资源；想要通过 https 获取 js 则需要在 https 下启动项目

```ts
const workerSource = `
importScripts("http://localhost:3000/comlink.umd.js");

Comlink.expose({
  getDate(num) {
    return num++;
  },
});`;

const blob = new Blob([workerSource], { type: "text/javascript" });
const loadableUrl = URL.createObjectURL(blob);
const worker = new Worker(loadableUrl, { name: "workerTest" });
const cw = Comlink.wrap(worker);

await cw.getDate(1);
```
