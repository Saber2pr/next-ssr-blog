import { fmap } from '@saber2pr/next-with-axios'
import { isMobAgent } from '../utils'
import { encodeUrl } from '../utils/encodeUrl'

const RedirectMap = {
  '/activity': '/动态',
  '/about': '/关于',
  '/links': '/链接',
}

export const withRedirect = fmap(withAxios => (handler, ctx) => {
  const url = ctx?.req?.url
  const reqHeaders = ctx?.req?.headers
  const agent = reqHeaders?.['user-agent']

  if (agent && isMobAgent(agent)) {
    const target = RedirectMap[url] || url
    ctx.res.writeHead(302, {
      Location: `//saber2pr.top/#${encodeUrl(target)}`,
    })
    ctx.res.end()
  }

  return withAxios(handler)(ctx)
})
