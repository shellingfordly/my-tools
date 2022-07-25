# Tools

这是一个个人向的用于一些文件格式转换的工具，持续添加一些乱七八糟的功能，喜欢的话可以关注本项目。

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

1. [数学表达式计算器](https://shellingfordly.github.io/my-tools/#/common/counter)

- 支持阿拉伯数字和汉字数字

<img src="./docs/imgs/counter.gif" style="width: 500px" />

2. [亲属关系计算器](https://shellingfordly.github.io/my-tools/#/common/counter)

基于[relationship](https://github.com/mumuy/relationship)库实现

<img src="./docs/imgs/relationship.gif" style="width: 500px" />

### 视频处理

> 目前 github pages 版本无法使用视频处理模块功能

1. [格式转换](https://shellingfordly.github.io/my-tools/#/video/format)

包括视频转 gif/mp4/avi/webm/mpeg/flv，使用 ffmpeg 库，转换格式为 ffmpeg 支持的格式

<img src="./docs/imgs/video_format.gif" style="width: 500px" />

2. [视频裁剪](https://shellingfordly.github.io/my-tools/#/video/clip)

通过 ffmpeg 截帧图片实现预览框

<img src="./docs/imgs/video_clip.gif" style="width: 500px" />

## Preparation

- [vue](https://vuejs.org/)
- [ffmpeg](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [unocss](https://github.com/unocss/unocss)

## Reference

- [video-to-gif](https://github.com/mryhryki/video-to-gif)
