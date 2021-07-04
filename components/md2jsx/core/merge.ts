/*
 * @Author: saber2pr
 * @Date: 2019-07-15 08:25:04
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-07-15 10:45:10
 */
export function mergeCode(ls: string[]) {
  const result: string[] = [];
  const codes: string[] = [];
  let lock = false;

  for (const l of ls) {
    if (l.startsWith("```")) lock = !lock;
    if (lock) {
      codes.push(l);
    } else {
      if (l === "") continue;
      codes.push(l);
      result.push(codes.join("\n"));
      codes.length = 0;
    }
  }

  return result;
}
