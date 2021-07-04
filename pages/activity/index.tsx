import './style.less'

import { useState } from 'react'

import { getContent } from '../../api/getContent'
import { getData } from '../../api/getData'
import { MainLayout } from '../../common/main-layout'
import { ScrollToTop } from '../../components'
import { Act, Info, matchText, matchType } from '../../modules'
import { withAxios } from '../../plugin/withAxios'
import { withPage } from '../../plugin/withPage'
import { timeDeltaFromNow } from '../../utils'

type Props = {
  acts: (Act & { desc?: string })[]
}

const previewLength = 4

export const getServerSideProps = withAxios<Props>(async ({ get }) => {
  const acts = await getData<Act[]>('activity')
  const previewActs = await Promise.all<Props['acts'][0]>(
    acts.slice(0, previewLength).map(async item => ({
      ...item,
      desc: await getContent(item.text),
    }))
  )
  return {
    acts: previewActs.concat(acts.slice(previewLength)),
  }
})

export default withPage<Props>(({ acts }) => {
  const deleted = acts.filter(a => a.type === 'delete').map(d => d.text)
  const [length, setLength] = useState(4)
  const hasMore = length <= acts.length
  return (
    <MainLayout className="PageActivity" title={`动态 - saber2prの窝`}>
      <ul>
        {acts.slice(0, length).map(({ type, text, date, desc }, i) => (
          <li key={text + i}>
            <div className="PageActivity-Content">
              <div className="PageActivity-Type">
                <strong>{matchType(type)}</strong>
              </div>
              <ul>
                <li className="PageActivity-Name">{matchText(type, text)}</li>
                {type !== 'delete' && !deleted.includes(text) && (
                  <li>
                    <Info path={text} desc={desc} />
                  </li>
                )}
                <li className="PageActivity-Time">
                  <p>{timeDeltaFromNow(date)}</p>
                </li>
              </ul>
            </div>
          </li>
        ))}
        {hasMore && (
          <li>
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                lineHeight: '2rem',
              }}
            >
              <span
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                onClick={() => setLength(length + 5)}
              >
                更多
              </span>
            </div>
          </li>
        )}
      </ul>
      <ScrollToTop />
    </MainLayout>
  )
})
