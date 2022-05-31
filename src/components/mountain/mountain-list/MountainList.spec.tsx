import { fireEvent, render } from '@testing-library/react'
import MountainList from '@/src/components/mountain/mountain-list/MountainList'
import { MountainListItemFragment } from '@/graphql/generated/client'
import React from 'react'

// jest.mock(
//   'react-window-infinite-loader',
//   () =>
//     ({ children }: any) =>
//       children({ height: 600, width: 600 }),
// )

const mountains: MountainListItemFragment[] = [
  {
    id: 1,
    name: 'foo',
    lat: 2,
    lng: 3,
  },
]
describe('MountainList', () => {
  it('should be load firstly', () => {
    const { getByRole } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={() => {}}
          onMouseEnterListItemButton={() => {}}
          onMouseLeaveListItemButton={() => {}}
          active={-1}
          isItemLoaded={() => false}
        />
      </div>,
    )
    expect(getByRole('loading')).toBeTruthy()
  })
  it('should load', () => {
    const { getByText } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={() => {}}
          onMouseEnterListItemButton={() => {}}
          onMouseLeaveListItemButton={() => {}}
          active={-1}
          isItemLoaded={() => true}
        />
      </div>,
    )
    expect(getByText('foo')).toBeTruthy()
  })
})

describe('active', () => {
  it('should have active class', () => {
    const { getByTestId } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={() => {}}
          onMouseEnterListItemButton={() => {}}
          onMouseLeaveListItemButton={() => {}}
          active={1}
          isItemLoaded={() => true}
        />
      </div>,
    )
    expect(getByTestId('mountain-list-item-1')).toHaveClass('mountain active')
  })
  it('should not have active class', () => {
    const { getByTestId } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={() => {}}
          onMouseEnterListItemButton={() => {}}
          onMouseLeaveListItemButton={() => {}}
          active={-1}
          isItemLoaded={() => true}
        />
      </div>,
    )
    expect(getByTestId('mountain-list-item-1')).toHaveClass('mountain')
  })
})

describe('click event', () => {
  it('onClickListItem', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={mockFn}
          onMouseEnterListItemButton={() => {}}
          onMouseLeaveListItemButton={() => {}}
          active={1}
          isItemLoaded={() => true}
        />
      </div>,
    )
    fireEvent.click(getByTestId('mountain-list-item-1'))
    expect(mockFn).toHaveBeenCalled()
  })
  it('onMouseEnterListItemButton', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={() => {}}
          onMouseEnterListItemButton={mockFn}
          onMouseLeaveListItemButton={() => {}}
          active={1}
          isItemLoaded={() => true}
        />
      </div>,
    )
    fireEvent.mouseEnter(getByTestId('mountain-list-item-button-1'))
    expect(mockFn).toHaveBeenCalled()
  })
  it('onMouseLeaveListItemButton', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(
      <div style={{ height: '1000px' }}>
        <MountainList
          mountains={mountains}
          loadMoreItems={() => {}}
          hasNext={false}
          onClickListItem={() => {}}
          onMouseEnterListItemButton={() => {}}
          onMouseLeaveListItemButton={mockFn}
          active={1}
          isItemLoaded={() => true}
        />
      </div>,
    )
    fireEvent.mouseLeave(getByTestId('mountain-list-item-button-1'))
    expect(mockFn).toHaveBeenCalled()
  })
})
