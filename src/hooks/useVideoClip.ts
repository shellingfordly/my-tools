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
  const { ffmpeg, writeFile, readFile } = useFFmpeg();

  async function clipImage(fileName: string, time: number) {
    await ffmpeg.run(
      "-ss",
      `${time}`,
      "-i",
      fileName,
      "-s",
      "200x100",
      "-f",
      "image2",
      "-frames",
      "1",
      `frame-${time}.jpeg`
    );
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
      if (buffer) {
        imgList.push({
          url: bufferChangeUrl(buffer, "jpeg"),
          index: i,
          time,
          fileName,
        });
      }
    }
    return imgList;
  }

  async function getClipVideo(config: any) {
    await ffmpeg.run(
      "-i",
      config.fileName,
      "-r",
      `${config.frameRate}`,
      "-ss",
      `${config.rangeStart}`,
      "-to",
      `${config.rangeEnd}`,
      "-vf",
      `scale=${config.width}:${config.height},fade=t=in:st=${config.rangeStart}:d=0.05`,
      `${config.output}.${config.fileType}`
    );
    const buffer = readFile(`${config.output}.${config.fileType}`);

    if (buffer) return bufferChangeUrl(buffer, config.fileType);
    return null;
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
