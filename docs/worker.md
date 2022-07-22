# Worker

worker 代码内无法跨域，因此去请求 https 请求时会报错

[参考文章](https://support.tuya.com/en/help/_detail/K9mc4d5ay54jm)

```
Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'https://unpkg.com/comlink/dist/umd/comlink.js' failed to load.
```
