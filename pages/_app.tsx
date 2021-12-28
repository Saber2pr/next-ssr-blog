// antd
import 'antd/dist/antd.min.css'
// moment
import 'moment/locale/zh-cn'
import 'nprogress/nprogress.css'
// styles
import '../styles/utils.less'
import '../styles/global.less'
import '../styles/reset.less'
import '../styles/animation.less'
import '../styles/components.less'
import '../styles/shadow.less'

import { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ApiConfig } from '../api/apiConfig'
import { requestApi, requestUri } from '../api/request'
import { requestProxy } from '../api/requestProxy'
import { useRouterChange } from '../hooks/useRouterChange'
import { useUserDingtalkFn } from '../hooks/useUserDingtalk'
import { useStore } from '../store'
import { printLogo } from '../utils/console'

const ComponentWrapper = ({ Component, pageProps }: AppProps) => {
  const send = useUserDingtalkFn()

  useRouterChange(
    {
      start: () => NProgress.start(),
      end: () => {
        NProgress.done()
        send(`正在浏览页面->${document.title}`)
      },
      error: () => NProgress.done(),
    },
    [send]
  )
  return <Component {...pageProps} />
}

export default function App(AppProps: AppProps) {
  const store = useStore(AppProps?.pageProps?.initialReduxState)

  useEffect(() => {
    // registerAnalyticsGoogle('UA-XXX')
    printLogo()

    NProgress.configure({
      minimum: 0.08,
      easing: 'linear',
      speed: 200,
      trickleSpeed: 200,
    })

    if (ApiConfig.log) {
      window['__store'] = store
      window['__config'] = ApiConfig
      window['__requestApi'] = requestApi
      window['__requestUri'] = requestUri
      window['__requestProxy'] = requestProxy
      window['__NProgress'] = NProgress
    }
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta
          name="keywords"
          content="react,antd,typescript,javascript,css,html,前端学习,前端进阶,个人博客"
        />
        <meta
          name="description"
          content="长期更新前端技术文章,分享前端技术经验"
        />
        <link rel="manifest" href="./manifest.json" />
        <script src="//cdn.jsdelivr.net/gh/Saber2pr/loading@master/index.min.js"></script>
        <script
          async
          src="//cdn.jsdelivr.net/gh/saber2pr/click-mask@master/click-mask.min.js"
        ></script>
        <script
          async
          src="//cdn.jsdelivr.net/gh/saber2pr/test@master/tools/debug.min.js"
        ></script>
        <script async src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
      </Head>
      <ComponentWrapper {...AppProps} />
    </Provider>
  )
}
