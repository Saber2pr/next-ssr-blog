import './style.less'

import { Avatar, Space, Typography } from 'antd'
import classnames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'

import { Link } from '../../components/link'

const { Text } = Typography

export interface MainHeader {}

type NavLink = {
  name: string
  href: string
}

const NavLinks: NavLink[] = [
  {
    name: '首页',
    href: '/',
  },
  {
    name: '动态',
    href: '/activity',
  },
  {
    name: '笔记',
    href: '/blog/永恒の幻想乡',
  },
]

export const MainHeader = ({}: MainHeader) => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <div className="MainHeader flex">
      <nav className="MainHeader-Nav">
        <ul className="NavList flex align-items-center">
          {NavLinks.map(({ name, href }) => {
            const isActive =
              href === '/' ? pathname === href : pathname.startsWith(href)
            let content = <>{name}</>
            if (href === '/') {
              content = (
                <Space style={{ height: '100%' }} direction="horizontal">
                  <Avatar
                    size={32}
                    shape="circle"
                    src="https://saber2pr.top/MyWeb/resource/image/saber2pr.webp"
                  />
                  <Text style={{ color: '#d5d5d7' }}>saber2pr</Text>
                </Space>
              )
            }
            return (
              <li
                key={href}
                className={classnames('NavList-Item', {
                  active: href === '/' ? false : isActive,
                })}
              >
                <Link className="NavList-Item-Anchor" href={href}>
                  {content}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="MainHeader-Right">
        <a className="NavList-Item-Anchor" href="https://saber2pr.top/">
          访问PWA版
        </a>
      </div>
    </div>
  )
}
