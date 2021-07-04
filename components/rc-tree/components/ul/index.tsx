import './style.less'

/*
 * @Author: saber2pr
 * @Date: 2019-07-21 18:41:09
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-11-18 13:31:38
 */
import React, { useState } from 'react'

import { TreeNode } from '../../type'

export interface Ul<T extends TreeNode>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  node: T
  index?: number
  render: (node: T, index: number) => JSX.Element
  selectBtn?(isActive: boolean): JSX.Element
}

export function Ul<T extends TreeNode>({
  children,
  node,
  index = 0,
  render,
  selectBtn = isActive => <span>{isActive ? "X" : "O"}</span>,
  ...props
}: Ul<T>) {
  const [state, setState] = useState(!!node.expand)
  node.expand = state
  const change = () => setState(!state)
  return (
    <>
      <span className="Ul-Btn" onClick={change}>
        {selectBtn(state)}
      </span>
      <span
        className={`Ul-Name${state ? " Ul-Name-Active" : ""}`}
        onClick={change}
      >
        {render(node, index)}
      </span>
      <ul className="Ul" {...props}>
        {state ? children : <></>}
      </ul>
    </>
  )
}
