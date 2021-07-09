import { appendPathExt, join } from '../utils'
import { ApiUrls } from './apiUrls'
import { requestUri } from './request'
import { requestProxy } from './requestProxy'

export const getContent = async (path: string, proxy = false) => {
  if (!path) return
  let res = null
  let fileUri = appendPathExt(path)
  if (fileUri && /^\/blog/.test(fileUri)) {
    fileUri = fileUri.replace(/^\/blog/, '')
  }
  const absPath = join(ApiUrls.content_, decodeURIComponent(fileUri))

  if (proxy) {
    res = await requestProxy({
      method: 'get',
      url: absPath,
    })
  } else {
    res = await requestUri.get<string>(encodeURI(absPath))
  }
  return res.data
}
