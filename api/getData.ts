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
    | 'acglist'
) => {
  const res = await requestUri.get<T>(join(ApiUrls.data_, `${type}.json`))
  return res.data
}
