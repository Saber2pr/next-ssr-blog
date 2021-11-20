import { join } from './path'
import { toQueryStr } from './toQueryStr'

/**
 * url添加参数方法
 * ```ts
 * // 示例
 * appendParams('/user', { id: 1, name: null })
 * // 输出 /user?id=1
 * ```
 */
export const appendParams = (url: string, params?: object) => {
  if (url && params) {
    if (url.indexOf('?') !== -1) {
      return `${url}&${toQueryStr(params)}`
    } else {
      return `${url}?${toQueryStr(params)}`
    }
  }
  return url
}

export const addBlogLink = ({ path }: { path: string }) => {
  if (path) {
    const url = join('/blog', clearPathExt(path))
    return url
  }
}

export const addOriginHref = ({ path }: { path: string }) => {
  return `https://github.com/saber2pr/saber2pr.github.io/blob/master${appendPathExt(
    path
  )}`
}

export const appendPathExt = (path: string) => {
  if (path) {
    if (/\.md$/.test(path)) return path
    return `${path}.md`
  }
}

export const clearPathExt = (path: string) => {
  if (path) {
    return path.replace(/\.md$/, '')
  }
}

export const createAvatars = (name: string, size = 70) =>
  `https://avatars.githubusercontent.com/${name}?size=${size}`
