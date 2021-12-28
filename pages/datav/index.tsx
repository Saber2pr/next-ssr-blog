import './style.less'

import React, { useEffect, useState } from 'react'

import { ChartCurve, ChartMind, ChartPie } from '../../modules/datav'
import { TextTree } from '../../utils'
import { withAxios } from '../../plugin/withAxios'
import { getData } from '../../api/getData'
import { withPage } from '../../plugin/withPage'
import { MainLayout } from '../../common/main-layout'

type Props = {
  data: TextTree
}

export const getServerSideProps = withAxios<Props>(async ({ get }) => {
  return {
    data: await getData<TextTree>('blog'),
  }
})

export const Datav = ({ data }: Props) => {
  const [key, setKey] = useState(1)

  return (
    <div className="Datav">
      <div className="row">
        <div className="col">
          <ChartPie title="技术侧重概览" data={data} />
        </div>
        <div className="col">
          <ChartCurve title="文章发布频率" data={data} />
        </div>
      </div>
      <div className="row">
        <ChartMind key={key} />
      </div>
    </div>
  )
}

export default withPage<Props>(props => {
  return (
    <MainLayout title={`链接 - saber2prの窝`}>
      <Datav data={props.data} />
    </MainLayout>
  )
})
