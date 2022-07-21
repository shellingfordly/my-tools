import { ProgressCallback } from "@ffmpeg/ffmpeg";
import type { VideoConfigType } from "/@/types";

export function useVideoFormat() {
  const { ffmpeg, fetchFile } = useFFmpeg();

  function setProgress(progressFn: ProgressCallback) {
    ffmpeg.setProgress(progressFn);
  }

  async function videoFormat(file: File, config: VideoConfigType) {
    ffmpeg.FS("writeFile", file.name, await fetchFile(file));

    const {
      frameRate = 25,
      width,
      height,
      rangeStart = 0,
      rangeEnd,
      fileType,
    } = config;

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

  return { setProgress, videoFormat };
}
