export type ImageFileType = "gif" | "jpg" | "jpeg" | "png";
export type VideoFileType = "mp4" | "avi" | "webm" | "mpeg" | "flv";

export type FileType = ImageFileType | VideoFileType;

export interface ExportFileType {
  url: string;
  type: "gif" | VideoFileType;
  size: number;
}

export interface VideoConfigType {
  frameRate?: number;
  width: number;
  height: number;
  rangeStart?: number;
  rangeEnd: number;
  fileType: "gif" | VideoFileType;
}

export interface VideoInfoType {
  file: File;
  el: Element;
  id: string;
  url: string;
  width: number;
  height: number;
  duration: number;
}

export interface ClipImageOptions {
  file: File;
  duration: number; // 时长
  frameNum?: number; // 帧数
}

export interface ClipImageItem {
  index: number;
  url: string;
  time: number;
  fileName: string;
}
