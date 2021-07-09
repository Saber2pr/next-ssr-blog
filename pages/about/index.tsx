import './style.less'

import { MainLayout } from '../../common/main-layout'
import { withAxios } from '../../plugin/withAxios'
import { withPage } from '../../plugin/withPage'
import { getData } from '../../api/getData'

type Props = {
  data: About
}

export const getServerSideProps = withAxios<Props>(async ({ get }) => {
  return {
    data: await getData('about')
  }
})


const Main = ({ contents }: { contents: string[] }) => {
  return (
    <>
      <h1 className="About-Main-Title">About Me</h1>
      <div className="About-Main-Content">
        <ul>
          {contents.map(a => (
            <li key={a}>
              <p>{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export interface About {
  contents: string[]
  projects: Array<{ name: string; href: string; content: string }>
}

export const About = ({ contents, projects }: About) => (
  <div className="About">
    <div className="flex">
      <section className="About-Main">
        <Main contents={contents} />
      </section>
      <aside className="About-Aside">
        <h2 className="About-Aside-Title">Projects</h2>
        <ul className="About-Aside-Content">
          {projects.map(({ name, href, content }) => (
            <li key={name} className="About-Aside-Content-Proj">
              <a href={href}>{name}</a>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </div>
)


export default withPage<Props>(props => {
  return (
    <MainLayout className='About'>
      <About {...props?.data}/>
    </MainLayout>
  )
})