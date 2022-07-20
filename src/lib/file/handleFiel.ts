import { FileItem } from "@arco-design/web-vue";

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
