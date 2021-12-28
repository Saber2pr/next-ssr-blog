import './style.less'

import React, { memo } from 'react'

import { Loading, PreImg, requestFrameModal } from '../../components'
import { withAxios } from '../../plugin/withAxios'
import { getData } from '../../api/getData'
import { withPage } from '../../plugin/withPage'
import { MainLayout } from '../../common/main-layout'

type Sites = {
  [k: string]: { name: string; href: string; icon: string; frame: boolean }[]
}

type Props = {
  data: Sites
}

export const getServerSideProps = withAxios<Props>(async ({ get }) => {
  return {
    data: await getData<Sites>('learn'),
  }
})

const PreImage = (
  <div
    style={{
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      backgroundColor: 'lightgrey',
      margin: '0 auto',
      marginBottom: '0.2rem',
    }}
  />
)

export const Learn = ({ data: sites }: Props) => {
  return (
    <div className="Learn">
      <ul className="Learn-List">
        {Object.keys(sites).map(key => (
          <li key={key} className="Learn-List-Item">
            <dl>
              <dt>
                <h3>{key}</h3>
              </dt>
              <dd>
                <ul className="libs">
                  {sites[key].map(({ name, icon, href, frame }, i) => {
                    let content = (
                      <>
                        <PreImg src={icon} alt={name} fallback={PreImage} />
                        <div className="libs-A">{name}</div>
                      </>
                    )
                    if (frame) {
                      content = (
                        <a
                          className="cursor-pointer"
                          title={name}
                          onClick={() => requestFrameModal(href)}
                        >
                          {content}
                        </a>
                      )
                    } else {
                      content = (
                        <a href={href} title={name} target="_blank">
                          {content}
                        </a>
                      )
                    }
                    return <li key={href + i}>{content}</li>
                  })}
                </ul>
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withPage<Props>(props => {
  return (
    <MainLayout title={`链接 - saber2prの窝`}>
      <Learn data={props.data} />
    </MainLayout>
  )
})
