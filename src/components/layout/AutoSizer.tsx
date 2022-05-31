// @ts-nocheck

import React from 'react'
import { AutoSizer as DefaultAutoSizer, Size } from 'react-virtualized'

type Props = {
  children: (size: Size) => JSX.Element
}
/**
 * https://github.com/bvaughn/react-virtualized/issues/1739
 *
 * @param children
 * @constructor
 */
const AutoSizer = ({ children }: Props) => {
  return <DefaultAutoSizer>{(size) => children(size)}</DefaultAutoSizer>
}

export default AutoSizer
