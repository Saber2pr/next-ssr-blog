import { ApiUrls } from './apiUrls';
import Axios from "axios"

export const get163Msg = async () => {
  const res = await Axios.get<string>(ApiUrls.comments163)
  const text = res.data
  if (text) {
    const contentEnd = text.indexOf('来自@')
    const anthEnd = text.indexOf('在「')
    return text.slice(0, contentEnd) + '@' + text.slice(contentEnd + 3, anthEnd)
  }
}