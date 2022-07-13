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
          resolve(file);
        }
      }
      reject("文件上传失败！");
    };
    input.click();
  });
}
