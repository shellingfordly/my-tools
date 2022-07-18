export type VideoFileType = "gif" | "mp4" | "avi" | "webm" | "mpeg" | "flv";

export interface ExportFileType {
  url: string;
  type: VideoFileType;
  size: number;
}

export interface VideoConfigType {
  frameRate?: number;
  width: number;
  height: number;
  rangeStart?: number;
  rangeEnd: number;
  fileType: VideoFileType;
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
