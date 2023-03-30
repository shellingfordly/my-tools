class ImageClip {
  canvas: HTMLCanvasElement;
  imgFile: File;

  constructor(canvas: HTMLCanvasElement, imgFile: File) {
    this.canvas = canvas;
    this.imgFile = imgFile;

    this.initCanvas(canvas, imgFile);
  }

  getPixelRatio(ctx: any) {
    var backingStore =
      ctx.backingStorePixelRatio ||
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;
    return (window.devicePixelRatio || 1) / backingStore;
  }

  initCanvas(canvas: HTMLCanvasElement, imgFile: File) {
    this.initImageInfo(imgFile).then((img) => {
      const ctx = canvas.getContext("2d");
      const ratio = this.getPixelRatio(ctx);

      this.canvas.width = img.width * ratio;
      this.canvas.height = img.height * ratio;

      if (ctx) {
        ctx.drawImage(img, 0, 0);
      }
    });
  }

  initImageInfo(file: File): Promise<HTMLImageElement> {
    return new Promise((res) => {
      const url = URL.createObjectURL(file);
      const image = new Image();

      image.src = url;
      image.onload = () => {
        URL.revokeObjectURL(url);
        res(image);
      };
    });
  }
}

export async function useImageClip(canvas: HTMLCanvasElement, file: File) {
  const ic = new ImageClip(canvas, file);

  return {};
}
