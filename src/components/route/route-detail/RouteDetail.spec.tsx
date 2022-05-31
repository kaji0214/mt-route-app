import { RouteDetailProps } from '@/src/components/route/route-detail/RouteDetail'
import { fireEvent, render } from '@testing-library/react'
import { mock, mockReset } from 'jest-mock-extended'
import { RouteDetailFragment } from '@/graphql/generated/client'
import {
  CanAllRouteDetail,
  CanNotEditRouteDetail,
  CanNotDeleteRouteDetail,
} from './RouteDetail.stories'
const data = mock<RouteDetailFragment>()

beforeEach(() => {
  mockReset(data)
})
describe('content check', () => {
  it('should be include route & mountain name ', () => {
    const { getByText } = render(
      <CanAllRouteDetail {...(CanAllRouteDetail.args as RouteDetailProps)} />,
    )
    expect(getByText('foo')).toBeInTheDocument()
    expect(getByText('bar')).toBeInTheDocument()
  })
})
describe('disabled check', () => {
  it('should be able ', () => {
    const { getByText } = render(
      <CanAllRouteDetail {...(CanAllRouteDetail.args as RouteDetailProps)} />,
    )
    expect(getByText('Edit')).not.toBeDisabled()
    expect(getByText('Delete')).not.toBeDisabled()
  })
  it('edit should be disabled ', () => {
    const { getByText } = render(
      <CanNotEditRouteDetail {...(CanNotEditRouteDetail.args as RouteDetailProps)} />,
    )
    expect(getByText('Edit')).toBeDisabled()
  })
  it('delete should be disabled ', () => {
    const { getByText } = render(
      <CanNotDeleteRouteDetail {...(CanNotDeleteRouteDetail.args as RouteDetailProps)} />,
    )
    expect(getByText('Delete')).toBeDisabled()
  })
})
describe('check click event', () => {
  it('click edit button', () => {
    const mockOnClick = jest.fn()
    const props = {
      ...CanAllRouteDetail.args,
      onClickEditRoute: mockOnClick,
    } as RouteDetailProps
    const { getByText } = render(<CanAllRouteDetail {...props} />)
    fireEvent.click(getByText('Edit'))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('click delete button', () => {
    const mockOnClick = jest.fn()
    const props = {
      ...CanAllRouteDetail.args,
      onClickDeleteRoute: mockOnClick,
    } as RouteDetailProps
    const { getByText } = render(<CanAllRouteDetail {...props} />)
    fireEvent.click(getByText('Delete'))
    expect(mockOnClick).toHaveBeenCalled()
  })
})
