export function isEmptyObject(obj: object) {
  return JSON.stringify(obj) === "{}";
}
