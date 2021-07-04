/*
 * @Author: saber2pr
 * @Date: 2019-07-21 18:53:42
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-07-30 19:08:14
 */
export interface TreeNode {
  children?: Array<this>;
  name: string;
  expand?: boolean;
  path?: string;
}
