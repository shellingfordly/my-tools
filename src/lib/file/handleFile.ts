import { FileItem } from "@arco-design/web-vue";
import { VideFile, ImageFile } from "/@/enums";
import type { FileType, ImageFileType, VideoFileType } from "/@/types";

export function handleFile(file: File | FileItem): File {
  let _file = file as File;
  if ((file as FileItem).file) {
    _file = (file as FileItem)?.file!;
  }
  if (!file) {
    throw new Error("没有找到文件！");
  }
  const name = "new_file" + getFileSuffix(_file.name);
  const newFile = new File([_file], name, { type: _file.type });
  return newFile;
}

function getFileSuffix(name: string) {
  return name.substring(name.lastIndexOf("."));
}

export function bufferChangeUrl(buffer: ArrayBufferLike, _type: FileType) {
  let prefix = "image";
  if (VideFile[_type as VideoFileType] !== undefined) {
    // 视频
    prefix = "video/";
  } else if (ImageFile[_type as ImageFileType]) {
    // 图片
    prefix = "image/";
  } else {
    // 音频
    console.log("音频处理");
  }
  console.log("prefix", prefix, _type);

  const url = URL.createObjectURL(
    new Blob([buffer], { type: `${prefix}${_type}` })
  );
  return url;
}
