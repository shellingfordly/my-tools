export function selectFile(): Promise<File> {
  return new Promise((resolve, reject) => {
    const input: HTMLInputElement = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.multiple = false;
    input.onchange = () => {
      if (input.files != null && input.files.length > 0) {
        const file = input.files.item(0);
        if (file != null) {
          resolve(handleFile(file));
        }
      }
      reject("文件上传失败！");
    };
    input.click();
  });
}

function handleFile(file: File) {
  const name = "new_file" + getFileSuffix(file.name);
  const newFile = new File([file], name, { type: file.type });
  return newFile;
}

function getFileSuffix(name: string) {
  return name.substring(name.lastIndexOf("."));
}
