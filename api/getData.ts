import { join } from '../utils'
import { ApiUrls } from './apiUrls'
import { requestUri } from './request'

export const getData = async <T>(
  type:
    | 'home'
    | 'activity'
    | 'blog'
    | 'learn'
    | 'about'
    | 'links'
    | 'version'
    | 'musicList'
    | 'acglist',
  contentType: 'json' | 'md' = 'json'
) => {
  const res = await requestUri.get<T>(
    join(ApiUrls.data_, `${type}.${contentType}`)
  )
  return res.data
}
