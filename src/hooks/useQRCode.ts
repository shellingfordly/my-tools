import { Message } from "@arco-design/web-vue";

function getQRCode() {
  if ("QRCode" in window) {
    return window.QRCode;
  }
  Message.error("二维码生成模块加载失败！请刷新重试。");

  return null;
}

export function useQRCode() {
  const QRCode = getQRCode();

  function createQRCode(dom: HTMLElement, text: string) {
    if (!QRCode) return null;
    if (!text) return null;

    const qrcode = new QRCode(dom, {
      text,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode?.CorrectLevel?.Q,
    });
    return new Promise((res) => {
      setTimeout(() => {
        res(qrcode);
      }, 0);
    });
  }

  return { QRCode, createQRCode };
}
