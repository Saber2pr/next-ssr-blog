import './style.less'

import { ApiUrls, resolveApiUrl } from '../api/apiUrls'
import { Home } from '../api/interface'
import { MainLayout } from '../common/main-layout'
import { withAxios } from '../plugin/withAxios'
import { withPage } from '../plugin/withPage'
import { getArray } from '../utils/array'
import { requestUri } from '../api'
import { getData } from '../api/getData'

type Props = {
  home: Home
}

export const getServerSideProps = withAxios<Props>(async ({ get }, ctx) => {
  return {
    home: await getData<Home>('home'),
  }
})

export default withPage<Props>(({ home }) => {
  const { title, infor, pic, items } = home
  return (
    <MainLayout className="PageIndex" title="saber2prの窝">
      <ul className="PageIndex-Ul">
        <li className="PageIndex-Title shd-blue">
          <i>{title}</i>
        </li>
        <li className="PageIndex-Infor">
          <i>{infor}</i>
        </li>
        <li className="PageIndex-Img">
          <img src={pic} alt={title} />
        </li>
      </ul>
      <div className="PageIndex-Content">
        <section className="PageIndex-Content-Item">
          <ul>
            {getArray(items).map(({ type, content }) => (
              <li key={type}>
                <h1 className="PageIndex-Content-Title">{type}</h1>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </MainLayout>
  )
})
