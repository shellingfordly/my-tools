
export interface PositionType {
  x: number;
  y: number;
  w: number;
  h: number;
};

interface PropsType {
  width: number,
  height: number
  img: HTMLImageElement,
  pos: PositionType
};

export const useImageClip = (
  {
    width, height, img, pos
  }: PropsType
) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.width = width;
  canvas.height = height;

  ctx.save();
  ctx.translate(width / 2, height / 2);

  ctx.translate(-width / 2, - height / 2);
  ctx.drawImage(img, 0, 0, width, height);
  ctx.restore();

  const putW = pos.w;
  const putH = pos.h;

  if (!putW || !putH) {
    return '';
  };

  const imgData = ctx.getImageData(pos.x, pos.y, putW, putH);

  canvas.width = putW;
  canvas.height = putH;

  ctx.putImageData(imgData, 0, 0);

  return new Promise(res => {
    canvas.toBlob(e => res(e));
  })
};