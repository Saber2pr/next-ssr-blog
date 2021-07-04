import './style.less'

import classnames from 'classnames'
import { useRouter } from 'next/router'
import { useLayoutEffect, useRef } from 'react'

import { getContent } from '../../api/getContent'
import { getData } from '../../api/getData'
import { MainLayout } from '../../common/main-layout'
import { Icon, Link, LinkProps, Tree } from '../../components'
import { useAniLayout, useAsideHidable } from '../../hooks'
import { Md2jsx, md_theme } from '../../modules'
import { withAxios } from '../../plugin/withAxios'
import { withPage } from '../../plugin/withPage'
import { useDispatchState, useSelectState } from '../../store'
import { addOriginHref, getArray, timeDeltaFromNow } from '../../utils'
import { TextTree } from '../../utils/collect'
import {
  findNodeByPath,
  Node,
  queryRootFirstChildMemo,
} from '../../utils/parseTree'

type Props = {
  tree: TextTree
  node: Node & { content: string }
}

export const getServerSideProps = withAxios<Props>(async ({ get }, ctx) => {
  const tree = await getData<TextTree>('blog')
  const path = `/blog/${getArray(ctx?.params?.path as any).join('/')}`
  const node = findNodeByPath(decodeURI(path), tree)
  const content = await getContent(node?.path)
  return {
    tree,
    node: {
      ...node,
      content,
    },
  }
})

const BLink = (props: LinkProps) => {
  const router = useRouter()
  return (
    <Link
      className={classnames('PageBlog-A', {
        active: decodeURI(router?.asPath) === props.href,
      })}
      {...props}
    />
  )
}

export default withPage<Props>(({ tree, node }) => {
  const firstBlog = queryRootFirstChildMemo(tree)

  const isOpen = useRef(false)
  const aniBtnRef = useRef<{ close: Function }>()
  const [ref, open, close] = useAniLayout()
  const isMobile = false

  const getLastModified = (href: string): string =>
    findNodeByPath(href, tree)?.['LastModified']

  const blogScrollTop = useSelectState('blogScrollTop')
  const dispatch = useDispatchState()
  useLayoutEffect(() => {
    window.scroll(0, 0)
    ref.current.scrollTop = blogScrollTop
    return () => {
      dispatch('blogScrollTop', ref.current.scrollTop)
    }
  }, [])

  const [main_ref, btn_ref, switchIsHide, isShow] = useAsideHidable(ref)

  return (
    <MainLayout className="PageBlog" title={`${node?.title} - saber2prの窝`}>
      <div className="flex">
        <main className="PageBlog-Main" ref={main_ref}>
          <h1 className="PageBlog-Main-Title">{node?.title}</h1>
          <div className="PageBlog-Main-Content">
            {typeof node?.content === 'string' && (
              <Md2jsx theme={md_theme}>{node?.content}</Md2jsx>
            )}
            <div className="PageBlog-Main-Content-Edit">
              <a
                className="PageBlog-Main-Content-Edit-A"
                href={addOriginHref({ path: node?.path })}
              >
                编辑本页面
              </a>
            </div>
            <p className="PageBlog-Main-Content-Date">
              最近更新 {timeDeltaFromNow(getLastModified(node?.path))}
            </p>
          </div>
        </main>
        <aside className="PageBlog-Aside" ref={ref}>
          <div
            ref={btn_ref}
            className="PageBlog-Aside-Btn"
            onClick={() => switchIsHide()}
          >
            {Icon.TreeBtn(isShow, '-90deg', '90deg', 'rotate')}
          </div>
          {tree && (
            <section className="PageBlog-Aside-Content">
              <Tree
                from={tree}
                selectBtn={Icon.TreeBtn}
                map={({ path: href, title, children }) => {
                  if (href === firstBlog?.path) return <></>
                  if (children) return <span>{title}</span>
                  return (
                    <BLink
                      href={href}
                      onClick={() => {
                        if (!isMobile) return
                        isOpen.current = close(false)
                        aniBtnRef.current.close()
                      }}
                    >
                      {title}
                    </BLink>
                  )
                }}
              />
            </section>
          )}
        </aside>
      </div>
    </MainLayout>
  )
})
