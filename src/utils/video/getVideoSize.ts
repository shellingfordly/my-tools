interface ReturnType {
  el: Element;
  width: number;
  height: number;
  duration: number;
  play: () => void;
}

export function getVideoSize(file: File): Promise<ReturnType> {
  return new Promise((resolve, reject) => {
    const videoUrl = URL.createObjectURL(file);
    const videoObj = document.createElement("video");
    videoObj.preload = "metadata";
    videoObj.src = videoUrl;
    videoObj.width = 300;
    videoObj.height = 200;

    videoObj.onloadedmetadata = function (evt) {
      URL.revokeObjectURL(videoUrl);
      resolve({
        el: videoObj,
        width: videoObj.videoWidth,
        height: videoObj.videoHeight,
        duration: Math.round(videoObj.duration),
        play: () => videoObj.play(),
      });
    };
  });
}
