# Tools

这是一个个人向的用于一些文件格式转换的工具，暂时只做了视频格式转换，后续会持续添加功能，可以关注本项目。

## Run

```
git clone https://github.com/shellingfordly/my-tools.git
cd my-tools
pnpm i
pnpm run dev
open http://localhost:3080/
```

## Feature

### 一些奇怪的工具

1. 数学表达式计算器

- 支持阿拉伯数字和汉字数字

<img src="./docs/imgs/counter.gif" style="width: 500px" />

### 视频编辑

1. 格式转换

包括视频转 gif/mp4/avi/webm/mpeg/flv，使用 ffmpeg 库，转换格式为 ffmpeg 支持的格式

<img src="./docs/imgs/video.gif" style="width: 500px" />

## Preparation

- [vue](https://vuejs.org/)
- [ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm)

## Reference

- [video-to-gif](https://github.com/mryhryki/video-to-gif)
