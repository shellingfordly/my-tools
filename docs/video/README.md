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

1. 解决精度下降问题

添加 `-b:v 0` 参数

```
ffmpeg -i input.mp4 -vcodec h264 -b:v 0 output.mp4
```

2. 截取某一帧的图片

input seeking 使用的是 key frames，速度更快
output seeking 是逐帧 decode，直到 1 分 05 秒，速度很慢

```
# input seeking
ffmpeg -ss 00:1:05 -i input.mp4 -frames:v 1 out.jpg
# output seeking
ffmpeg -i input.mp4 -ss 00:1:05 -frames:v 1 out1.jpg
```

3. 截取一段视频

[视频截取参考文章](https://blog.csdn.net/dfb714620427/article/details/121108089)

- transcoding 是先 decoding 再 encoding
- stream copying 不需要 decoding + encoding，速度更快

```
#1, use stream copying & input seeking
ffmpeg -ss 00:01:01 -i input.mp4 -t 4 -c copy cut1.mp4

#2 use stream copying & output seeking
ffmpeg -i input.mp4 -ss 00:01:01  -t 4 -c:v copy cut2.mp4

#3 use transcoding & input seeking
ffmpeg -ss 00:01:01 -i input.mp4  -t 4 -c:v libx264 cut3.mp4

#4 use transcoding & output seeking
ffmpeg -i input.mp4 -ss 00:01:01 -t 4 -c:v libx264 cut4.mp4
```
