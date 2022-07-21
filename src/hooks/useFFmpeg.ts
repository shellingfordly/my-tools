import {
  createFFmpeg,
  fetchFile,
  FFmpeg,
  ProgressCallback,
} from "@ffmpeg/ffmpeg";
import { Message } from "@arco-design/web-vue";

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
    } catch (error) {
      Message.error("读取文件失败！请重试");
    }
    return null;
  }

  function ffmpegRun(options) {
    console.log("options");
  }

  return { ffmpeg, loadFFmpeg, setProgress, writeFile, readFile };
}
