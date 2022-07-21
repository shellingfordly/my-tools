# ffmpeg

## 基本参数

-i 文件输入选项

-vcodec 在-i 前时表示解码时用到的解码器，在-i 后面表示编码时用的编码器，前后可同时出现

-s 表示编码输出的分辨率，如 1280x720 等

-aspect 表示宽高比，可以写 16:9、4:3 这种，也可以写小数，比如 1.3333

-pix_fmt 表示编码像素格式，如 yuv420p 等

-b 表示视频的码率，与-b:v 含义一样，单位为 bps，可写成如“-b:v 500k”

-r 表示帧率，如 25.0 等

-g 表示 gop 的大小，一般可设为帧率的 2 倍

-acodec 表示音频编码器，如 aac 等

-ab 表示音频的码率，与-b:a 含义一样，与视频一样单位为 bps，如“-b:a 128k”等

-ac 表示音频的通道数，即单声道双声道等

-ar 表示音频的采样率，如 44100、48000 等

-profile:v 表示视频编码时用的 profile，质量由低到高有 base、main、high 等选项

-f 表示输出的封装格式，如 mp4、flv、mov 等

## 操作

### 解决精度下降问题

添加 `-b:v 0` 参数

```bash
ffmpeg -i input.mp4 -vcodec h264 -b:v 0 output.mp4
```

---

## 截取某一帧的图片

### 截取高分辨率图

- -f 类型 image2 表示图片
- -r 一秒截取多少张 （如果这里指定了 -r 那么后面 -vf 指定隔几秒取帧就无效了）
- -q:v2 表示截图画面的质量
- -vf fps=1/20 每隔 20 秒截取一张

```bash
ffmpeg -i /data/video_1.mp4 -f image2  -vf fps=fps=1/60 -qscale:v 2 /data/mp4-%05d.jpeg
```

### 普通截取

> 画质差

```bash
ffmpeg -i inputfile.avi -r 1 -f image2 image-%05d.jpeg
```

## 截取一段视频

### 第一种

[视频截取参考文章](https://blog.csdn.net/dfb714620427/article/details/121108089)

- transcoding 是先 decoding 再 encoding
- stream copying 不需要 decoding + encoding，速度更快

```bash
#1, use stream copying & input seeking
ffmpeg -ss 00:01:01 -i input.mp4 -t 4 -c copy cut1.mp4

#2 use stream copying & output seeking
ffmpeg -i input.mp4 -ss 00:01:01  -t 4 -c:v copy cut2.mp4

#3 use transcoding & input seeking
ffmpeg -ss 00:01:01 -i input.mp4  -t 4 -c:v libx264 cut3.mp4

#4 use transcoding & output seeking
ffmpeg -i input.mp4 -ss 00:01:01 -t 4 -c:v libx264 cut4.mp4
```

### 第二种

- i ：指定输入视频的路径
- ss 时间：从哪个时间点开始
- to 时间：从哪个时间点结束
- c：是视音频的格式
- copy：是指输出视频直接 copy 输入视频
- cut.mp4：指输出视频的地址，例如：C:\cut.mp4

```bash
ffmpeg -i video.mp4 -ss 00:03:00  -to 00:02:00 -c copy cut.mp4
```

## 问题

1. 使用 ffmpeg 截取图片时，ffmpeg.FS 读取截取的图片添加到 vue 的 ref 变量中，在页面上更新每帧的图片。截取的每帧的图片会被添加两次。

```ts
const frameNum = duration! / 4;
const per = duration! / frameNum;

for (let i = 0; i < frameNum; i++) {
  await ffmpeg.run(
    "-ss",
    `${Math.floor(per * i)}`,
    "-i",
    _file.name,
    "-s",
    "960x540",
    "-f",
    "image2",
    "-frames",
    "1",
    `frame-${i + 1}.jpeg`
  );
}
for (let i = 0; i < frameNum; i++) {
  const buffer = ffmpeg.FS("readFile", `frame-${i + 1}.jpeg`).buffer;
  const url = URL.createObjectURL(new Blob([buffer], { type: "image/jpg" }));
  imgList.value.push({ index: i, url });
}
```
