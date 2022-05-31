import { render } from '@testing-library/react'
import { RouteListItemFragment } from '@/graphql/generated/client'




import RouteList from '@/src/components/route/route-list/RouteList'

const data: RouteListItemFragment[] = [
  { id: 1, mountainId: 1, name: 'foo', time: 1 },
  { id: 2, mountainId: 2, name: 'bar', time: 2 },
]

describe('content check', () => {
  it('should show names', () => {
    const { getByText } = render(
      <RouteList data={data}>
        {({ index, style }) => {
          return <div>{data[index].name}</div>
        }}
      </RouteList>,
    )
    expect(getByText('foo')).toBeTruthy()
    expect(getByText('bar')).toBeTruthy()
  })
})
