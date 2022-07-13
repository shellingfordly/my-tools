import type {
  CreateFFmpegOptions,
  FFmpeg,
  ProgressCallback,
} from "@ffmpeg/ffmpeg";
import { getVideoSize } from "../utils/video/getVideoSize";

interface FFmpegType {
  createFFmpeg: (options?: CreateFFmpegOptions) => FFmpeg;
  fetchFile: (data: string | Buffer | Blob | File) => Promise<Uint8Array>;
}

export interface ConfigType {
  frameRate?: number;
  width?: number;
  height?: number;
  rangeStart?: number;
  rangeEnd?: number;
  fileType?: "gif" | "mp4" | "avi" | "webm" | "mpeg" | "flv";
}

const getFFmpeg = () => {
  if (!("FFmpeg" in window)) {
    throw new Error("FFmpeg could not be loaded.");
  } else if (!("SharedArrayBuffer" in window)) {
    throw new Error("SharedArrayBuffer could not be used.");
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).FFmpeg as FFmpegType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let ffmpeg: FFmpeg | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const loadFFmpeg = async (): Promise<any> => {
  if (ffmpeg == null) {
    const { createFFmpeg } = getFFmpeg();
    ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();
  }
  return ffmpeg;
};

export async function useFFmpeg(
  file: File,
  config: ConfigType,
  progressFn: ProgressCallback = () => {}
) {
  const ffmpeg = await loadFFmpeg();
  const { fetchFile } = getFFmpeg();

  ffmpeg.setProgress(progressFn);

  const {
    width: defaultWidth,
    height: defaultHeight,
    duration,
  } = await getVideoSize(file);
  const {
    frameRate = 25,
    width = defaultWidth,
    height = defaultHeight,
    rangeStart = 0,
    rangeEnd = duration,
    fileType,
  } = config;

  ffmpeg.FS("writeFile", file.name, await fetchFile(file));

  await ffmpeg.run(
    "-i",
    file.name,
    "-r",
    `${frameRate}`,
    "-ss",
    `${rangeStart}`,
    "-to",
    `${rangeEnd}`,
    "-vf",
    `scale=${width}:${height},fade=t=in:st=${rangeStart}:d=0.05`,
    `output.${fileType}`
  );

  return ffmpeg.FS("readFile", `output.${fileType}`).buffer;
}

export const checkCanUseFFmpeg = (): string | null => {
  try {
    getFFmpeg();
    return null;
  } catch (err) {
    return `${err}`;
  }
};
