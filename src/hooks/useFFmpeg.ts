import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";
import { Message } from "@arco-design/web-vue";

let ffmpeg: FFmpeg | null = null;

export function useFFmpeg() {
  if (!("SharedArrayBuffer" in window)) {
    Message.error("浏览器不支持 SharedArrayBuffer， 无法使用视频功能！");
    throw new Error("SharedArrayBuffer could not be used.");
  }
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

  // function checkCanUseFFmpeg() {
  //   try {
  //     ffmpeg?.run();
  //     return true;
  //   } catch (error) {
  //     console.warn("[MY-TOOL]:", error);
  //   }
  //   return false;
  // }

  return { ffmpeg, fetchFile, loadFFmpeg };
}
