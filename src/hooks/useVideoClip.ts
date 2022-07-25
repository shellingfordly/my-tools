import { bufferChangeUrl } from "../lib/file/handleFile";
import { ClipImageItem, FFmpegConfig } from "../types";

interface ClipImageOptions {
  filename: string;
  duration: number; // 时长
  frameNum?: number; // 帧数
  imgs: ClipImageItem[];
}

export function useVideoClip() {
  const { ffmpeg, writeFile, readFile, ffmpegRun } = useFFmpeg();

  async function clipImage(filename: string, time: number) {
    return await ffmpegRun({
      type: "image",
      filename,
      rangeStart: time,
      width: 200,
      height: 100,
      outputName: `frame-${time}`,
      fileType: "jpeg",
    });
  }

  async function getClipImages(options: ClipImageOptions) {
    const { frameNum = 8, duration, filename, imgs } = options;
    const per = duration! / frameNum;

    (async function push(index: number) {
      const time = Math.floor(per) * index;
      const name = `frame-${time}.jpeg`;
      const { url } = await clipImage(filename, time);
      const img = { url, index, time, name };
      imgs.push(img);
      if (index <= frameNum) push(++index);
    })(0);
  }

  async function getClipVideo(config: FFmpegConfig) {
    return await ffmpegRun(config);
  }

  return {
    ffmpeg,
    writeFile,
    readFile,
    clipImage,
    getClipImages,
    getClipVideo,
  };
}
