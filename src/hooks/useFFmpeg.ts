import {
  createFFmpeg,
  fetchFile,
  FFmpeg,
  ProgressCallback,
} from "@ffmpeg/ffmpeg";

export type FileType = "gif" | "mp4" | "avi" | "webm" | "mpeg" | "flv";

export interface ConfigType {
  frameRate?: number;
  width: number;
  height: number;
  rangeStart?: number;
  rangeEnd: number;
  fileType: FileType;
}

const getFFmpeg = () => {
  if (!("SharedArrayBuffer" in window)) {
    throw new Error("SharedArrayBuffer could not be used.");
  }
  return {
    createFFmpeg,
    fetchFile,
  };
};

let ffmpeg: FFmpeg | null = null;

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
    frameRate = 25,
    width,
    height,
    rangeStart = 0,
    rangeEnd,
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
