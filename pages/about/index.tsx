import './style.less'

import React from 'react'

import { getData } from '../../api/getData'
import { MainLayout } from '../../common/main-layout'
import { Md2jsx } from '../../components'
import { withAxios } from '../../plugin/withAxios'
import { withPage } from '../../plugin/withPage'

type Props = {
  data: About
}

export const getServerSideProps = withAxios<Props>(async ({ get }) => {
  const about = await getData<About>('about')
  const content = await getData<string>('about', 'md')
  return {
    data: {
      ...about,
      content
    },
  }
})

const Main = ({ content }: { content: string }) => {
  return (
    <>
      <h1 className="About-Main-Title">About Me</h1>
      <div className="About-Main-Content">
        <Md2jsx theme={null}>{content}</Md2jsx>
      </div>
    </>
  )
}

export interface About {
  content: string
  projects: Array<{ name: string; href: string; content: string }>
}

export const About = ({content,  projects }: About) => (
  <div className="About">
    <div className="flex">
      <section className="About-Main">
      <Main content={content} />
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
    <MainLayout className='About' title={`关于 - saber2prの窝`}>
      <About {...props?.data}/>
    </MainLayout>
  )
})