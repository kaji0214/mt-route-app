import { render } from '@testing-library/react'
import { mock, mockReset } from 'jest-mock-extended'
import { RouteDetailFragment } from '@/graphql/generated/client'
import { NormalLatlngsTable } from '@/src/components/route/route-latlngs-table/RouteLatlngsTable.stories'
import { RouteLatlngsTableProps } from '@/src/components/route/route-latlngs-table/RouteLatlngsTable'
const data = mock<RouteDetailFragment>()

beforeEach(() => {
  mockReset(data)
})
describe('content check', () => {
  it('should be include lat lng', () => {
    const { getByText } = render(
      <NormalLatlngsTable {...(NormalLatlngsTable.args as RouteLatlngsTableProps)} />,
    )
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
    expect(getByText('6')).toBeInTheDocument()
  })
})
