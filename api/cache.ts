import { AxiosInstance } from 'axios'
import LRU from 'lru-cache'

import { TestError } from '../utils/createError'
import { toQueryStr } from '../utils/toQueryStr'
import { ApiConfig } from './apiConfig'
import { ApiUrls, cachelist } from './apiUrls'

const HOUR_MS = 3600000

// 同构缓存
const cache = new LRU<string, any>({
  max: 1000,
  maxAge: 1 * HOUR_MS, // 毫秒
})

const matchCache = (url: string) => {
  const api = url.split('?')[0]
  return !!cachelist.find(key => api.startsWith(ApiUrls[key]))
}

export const getCacheSize = () => cache.itemCount

export const getCache = (url: string) => {
  if (url && matchCache(url)) {
    const data = cache.get(url)
    if (data) {
      if (ApiConfig.log) {
        console.log(`[Get-Cache]: ${url}`)
      }
      return data
    }
  }
}

export const setCache = (url: string, data: any) => {
  if (url && matchCache(url)) {
    if (ApiConfig.log) {
      console.log(`[Set-Cache]: ${url}`)
    }
    cache.set(url, data)
  }
}

export const delCache = (url: string) => {
  if (url && matchCache(url)) {
    if (ApiConfig.log) {
      console.log(`[Del-Cache]: ${url}`)
    }
    cache.del(url)
  }
}

export const clearCache = () => {
  cache.reset()
}

/**
 * axios实例必须handleError，此方法不负责异常处理
 */
export const enhanceAxiosCache = (axios: AxiosInstance) => {
  const originGet = axios.get
  axios.get = async (url, config) => {
    const queryStr = config?.params ? `?${toQueryStr(config.params)}` : ''
    const cacheKey = `${url}${queryStr}`
    const result = getCache(cacheKey) // 超过maxAge这里result会变成null
    if (result) {
      return result
    }
    const apiRes = await originGet(url, config) // 异常已处理
    if (TestError(apiRes.data)) {
      // 如果异常，直接返回
      delCache(cacheKey)
      return apiRes
    } else {
      // 添加缓存
      setCache(cacheKey, apiRes)
      return apiRes
    }
  }
  return axios
}
