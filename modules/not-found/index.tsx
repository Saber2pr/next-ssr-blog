import './style.less'

import React from 'react'
import { useRouter } from 'next/router'

export interface NotFound {}

export const NotFound = ({}: NotFound) => {
  const router = useRouter()
  return (
    <div className="NotFound">
      <h1>诶！？页面走丢了QAQ！</h1>
      <h1>404 NotFound</h1>
      <ul>
        <li>
          <button className="ButtonHigh" onClick={() => router.push('/')}>
            首页
          </button>
        </li>
        <li>
          <a className="AnchorHigh" onClick={() => router.back()}>
            或者返回上页
          </a>
        </li>
      </ul>
    </div>
  )
}
