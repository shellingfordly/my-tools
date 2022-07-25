import {
  createFFmpeg,
  fetchFile,
  FFmpeg,
  ProgressCallback,
} from "@ffmpeg/ffmpeg";
import { Message } from "@arco-design/web-vue";
import { FFmpegConfig } from "../types";
import { bufferChangeUrl } from "../lib/file/handleFile";

let ffmpeg: FFmpeg | null = null;

function checkStation() {
  if (!("SharedArrayBuffer" in window)) {
    Message.error("浏览器不支持 SharedArrayBuffer， 无法使用视频功能！");
    throw new Error("SharedArrayBuffer could not be used.");
  }
}

export function useFFmpeg() {
  checkStation();
  if (!ffmpeg) {
    ffmpeg = createFFmpeg({ log: true });
  }

  onMounted(loadFFmpeg);

  onUnmounted(() => {
    ffmpeg = null;
  });

  async function loadFFmpeg() {
    if (!ffmpeg?.isLoaded()) {
      await ffmpeg?.load();
    }
  }

  function setProgress(progressFn: ProgressCallback) {
    ffmpeg && ffmpeg.setProgress(progressFn);
  }

  async function writeFile(file: File) {
    try {
      ffmpeg && ffmpeg.FS("writeFile", file.name, await fetchFile(file));
    } catch (error) {
      Message.error("写入文件失败！请重试");
    }
  }

  function readFile(fileName: string) {
    try {
      if (ffmpeg) return ffmpeg.FS("readFile", fileName).buffer;
      return null;
    } catch (error) {
      Message.error("读取文件失败！请重试");
    }
    return null;
  }

  async function ffmpegRun(config: FFmpegConfig) {
    const info = {
      url: "",
      size: 0,
    };
    if (!ffmpeg) return info;
    const { outputName, fileType } = config;
    try {
      await ffmpeg.run(...handleCommand(config));
      const buffer = await readFile(`${outputName}.${fileType}`);
      info.url = bufferChangeUrl(buffer, fileType);
      info.size = buffer?.byteLength || 0;
      return info;
    } catch (error) {
      Message.error("文件操作失败！请重试");
    }
    return info;
  }

  return { ffmpeg, loadFFmpeg, setProgress, writeFile, readFile, ffmpegRun };
}

function handleCommand(config: FFmpegConfig) {
  const {
    filename,
    frameRate = 25,
    rangeStart = 0,
    rangeEnd,
    width = -1,
    height = -1,
    fileType,
    outputName = "output",
    type,
  } = config;
  const CommandMap: Record<FFmpegConfig["type"], string> = {
    image: `-ss ${rangeStart} -i ${filename} -s ${width}x${height} -f image2 -frames 1 ${outputName}.${fileType}`,
    video: `-i ${filename} -r ${frameRate} -ss ${rangeStart} -to ${rangeEnd} -vf scale=${width}:${height},fade=t=in:st=${rangeStart}:d=0.05 ${outputName}.${fileType}`,
  };
  return CommandMap[type].split(/(?:\s+)/);
}
