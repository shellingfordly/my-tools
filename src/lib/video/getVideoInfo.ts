import type { VideoInfoType } from "../../types/video.type";
import { FileItem } from "@arco-design/web-vue";
import { handleFile } from "../file/handleFile";

export function getVideoInfo(_file: File | FileItem): Promise<VideoInfoType> {
  return new Promise((resolve, reject) => {
    try {
      const file = handleFile(_file);
      const url = URL.createObjectURL(file);
      const video = document.createElement("video");
      video.src = url;
      const id = `${Date.now()}${Math.random()}`;

      video.onloadedmetadata = function () {
        URL.revokeObjectURL(url);
        
        resolve({
          file,
          url,
          id,
          el: video,
          width: video.videoWidth,
          height: video.videoHeight,
          duration: Math.round(video.duration),
        });
      };
    } catch (err) {
      reject(err);
    }
  });
}
