import './style.less'

import React, { useState } from 'react'

import { useEvent } from '../../hooks'
import { throttle } from '../../utils'
import { Icon } from '../iconfont'

export interface ScrollToTop {}

const useNeedToTop = () => {
  const [state, setState] = useState(false)
  useEvent('scroll', () => {
    const d = document.documentElement
    throttle(() => setState(d.scrollTop > d.clientHeight), 300)
  })
  return state
}

export const ScrollToTop = ({}: ScrollToTop) => {
  const needToTop = useNeedToTop()
  if (needToTop) {
    return (
      <div
        className="ScrollToTop"
        onClick={() => {
          document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        <Icon.Top />
      </div>
    )
  }

  return <></>
}
