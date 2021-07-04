import { useState } from 'react'
import { useEffect } from 'react'
import { memo } from 'react'
import { getContent } from '../../api/getContent'
import { Icon, Link } from '../../components'
import { addBlogLink } from '../../utils'
import { Spin } from 'antd'

export type Act = {
  type: 'update' | 'create' | 'delete'
  text: string
  date: string
}

export const matchType = (type: Act['type']) => {
  switch (type) {
    case 'update':
      return (
        <p>
          <Icon.Update />
          更新
        </p>
      )
    case 'create':
      return (
        <p>
          <Icon.Create />
          创建
        </p>
      )
    case 'delete':
      return (
        <p>
          <Icon.Delete />
          删除
        </p>
      )
    default:
      return (
        <p>
          <Icon.Idea />
          {type}
        </p>
      )
  }
}

export const matchText = (type: Act['type'], text: Act['text']) => {
  if ((['create', 'update'] as Act['type'][]).includes(type)) {
    return <strong>{text.split('.')[0].split('/').pop()}</strong>
  }
  if (type === 'delete') {
    return text.split('.')[0].split('/').pop()
  }

  return text
}

export const Info = memo(({ path, desc }: { path: string; desc: string }) => {
  const [displayDesc, setDisplayDesc] = useState(desc)
  const [loading, setLoading] = useState(false)

  const init = async () => {
    try {
      setLoading(true)
      const desc = await getContent(path, true)
      setDisplayDesc(desc)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (desc) {
    } else {
      init()
    }
  }, [desc])
  return (
    <div className="PageActivity-Info">
      <Spin spinning={loading}>
        {typeof displayDesc === 'string'
          ? `${displayDesc.slice(0, 60)}...`
          : ''}
        <Link className="AnchorHigh" href={addBlogLink({ path })}>
          查看内容
        </Link>
      </Spin>
    </div>
  )
})
