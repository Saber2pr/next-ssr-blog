import { join } from '../utils/path'
import { ApiConfig } from './apiConfig'

export const ApiUrls = {
  // 工具api
  utils_proxy: '/utils/proxy',

  // 钉钉
  dingtalkSendMessage: '/dingtalk/sendMessage',

  // apis
  list: '/list',

  // github
  data_: 'https://saber2pr.top/saber2pr.github.io/static/data/',
  content_: 'https://saber2pr.top/saber2pr.github.io/blog',
}

export const resolveApiUrl = (apiUrl: string, params: object) =>
  apiUrl && apiUrl.replace(/\{(\w+)\}/g, (_, n) => params[n])

export const getAbsoluteUrl = (apiUrl: string) => join(ApiConfig.target, apiUrl)

export const getProxyUrl = (apiUrl: string) => join(ApiConfig.proxyApi, apiUrl)

export const cachelist: Array<keyof typeof ApiUrls> = ['content_', 'data_']
