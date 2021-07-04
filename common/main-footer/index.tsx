import './style.less'

import { Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography

export interface MainFooter {}

export const MainFooter = ({}: MainFooter) => {
  return (
    <div className="MainFooter">
      <Paragraph className="MainFooter-Content">
        {`Copyright © 2019-${new Date().getFullYear()} saber2pr`}
      </Paragraph>
    </div>
  )
}
