import type { FFmpeg } from "@ffmpeg/ffmpeg";
import { bufferChangeUrl } from "/@/lib/file/handleFile";

interface ClipImageOptions {
  file: File;
  duration: number; // 时长
  frameNum?: number; // 帧数
}

export interface ClipImageItem {
  index: number;
  url: string;
  time: number;
  fileName: string;
}

export function useVideoClip() {
  const { ffmpeg, fetchFile } = useFFmpeg();

  async function writeFile(file: File) {
    ffmpeg.FS("writeFile", file.name, await fetchFile(file));
  }

  function readFile(fileName: string) {
    try {
      return ffmpeg.FS("readFile", fileName).buffer;
    } catch (error) {
      console.warn("error", error);
    }
    return null;
  }

  async function clipImage(fileName: string, time: number) {
    await _clipImage(ffmpeg, fileName, time);
  }

  async function getClipImages(options: ClipImageOptions) {
    const { frameNum = 8, duration, file } = options;
    const per = duration! / (frameNum - 1);
    for (let i = 0; i < frameNum; i++) {
      await clipImage(file.name, Math.floor(per) * i);
    }

    const imgList: ClipImageItem[] = [];

    for (let i = 0; i < frameNum; i++) {
      const time = Math.floor(per) * i;
      const fileName = `frame-${time}.jpeg`;
      const buffer = readFile(fileName);

      if (buffer)
        imgList.push({
          url: bufferChangeUrl(buffer, "jpeg"),
          index: i,
          time,
          fileName,
        });
    }

    return imgList;
  }

  return { ffmpeg, writeFile, readFile, clipImage, getClipImages };
}

async function _clipImage(ffmpeg: FFmpeg, fileName: string, time: number) {
  await ffmpeg.run(
    "-ss",
    `${time}`,
    "-i",
    fileName,
    "-s",
    "960x540",
    "-f",
    "image2",
    "-frames",
    "1",
    `frame-${time}.jpeg`
  );
}
