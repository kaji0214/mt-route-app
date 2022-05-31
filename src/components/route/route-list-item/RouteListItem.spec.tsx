import { fireEvent, render } from '@testing-library/react'
import {
  RouteListItemProps,
} from '@/src/components/route/route-list-item/RouteListItem'
import {
  ActiveRouteListItem,
  NonActiveRouteListItem,
} from '@/src/components/route/route-list-item/RouteListItem.stories'

describe('content check', () => {
  it('should be show name', () => {
    const { getByText } = render(
      <NonActiveRouteListItem {...(NonActiveRouteListItem.args as RouteListItemProps)} />,
    )
    expect(getByText('foo')).toBeTruthy()
  })
})
describe('active check', () => {
  it('when active', () => {
    const { getByTestId } = render(
      <ActiveRouteListItem {...(ActiveRouteListItem.args as RouteListItemProps)} />,
    )
    expect(getByTestId('route-list-item-1')).toHaveClass('route active')
  })
  it('when non-active', () => {
    const { getByTestId } = render(
      <NonActiveRouteListItem {...(NonActiveRouteListItem.args as RouteListItemProps)} />,
    )
    expect(getByTestId('route-list-item-1')).not.toHaveClass('route active')
  })
})

describe('click event check', () => {
  it('on click list item', () => {
    const mockFn = jest.fn()
    const props = {
      ...NonActiveRouteListItem.args,
      onClickListItem: mockFn,
    } as RouteListItemProps
    const { getByTestId } = render(<NonActiveRouteListItem {...props} />)
    fireEvent.click(getByTestId('route-list-item-1'))
    expect(mockFn).toHaveBeenCalled()
  })
  it('on mouse enter list item button', () => {
    const mockFn = jest.fn()
    const props = {
      ...NonActiveRouteListItem.args,
      onMouseEnterListItemButton: mockFn,
    } as RouteListItemProps
    const { getByTestId } = render(<NonActiveRouteListItem {...props} />)
    fireEvent.mouseEnter(getByTestId('route-list-item-button-1'))
    expect(mockFn).toHaveBeenCalled()
  })
  it('on mouse leave list item button', () => {
    const mockFn = jest.fn()
    const props = {
      ...NonActiveRouteListItem.args,
      onMouseLeaveListItemButton: mockFn,
    } as RouteListItemProps
    const { getByTestId } = render(<NonActiveRouteListItem {...props} />)
    fireEvent.mouseLeave(getByTestId('route-list-item-button-1'))
    expect(mockFn).toHaveBeenCalled()
  })
})
