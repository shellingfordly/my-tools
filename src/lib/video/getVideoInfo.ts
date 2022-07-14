export interface VideoInfoType {
  file: File;
  el: Element;
  id: string;
  url: string;
  width: number;
  height: number;
  duration: number;
}

export function getVideoInfo(file: File): Promise<VideoInfoType> {
  return new Promise((resolve, reject) => {
    try {
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
