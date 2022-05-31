import * as React from 'react'
import { memo } from 'react'
import { RouteListItemFragment } from '@/graphql/generated/client'
import AutoSizer from '@/src/components/layout/AutoSizer'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

type Props = {
  data: RouteListItemFragment[]
  children: (props: ListChildComponentProps<RouteListItemFragment[]>) => JSX.Element
}
const RouteList = ({ data, children }: Props) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          height={height - 270}
          width={400}
          itemSize={100}
          itemCount={data.length}
          overscanCount={5}
        >
          {children}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
}

export default memo(RouteList)
