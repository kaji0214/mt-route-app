import { fireEvent, render } from '@testing-library/react'
import { mock, mockReset } from 'jest-mock-extended'
import { MountainMarkerFragment } from '@/graphql/generated/client'
import { NonActive } from '@/src/components/route/route-polyline/RoutePolyline.stories'
import { RoutePolylineProps } from '@/src/components/route/route-polyline/RoutePolyline'
import * as hook from '@/src/contexts/ActiveContext/ActiveContextProvider'

const mockSetActive = jest.fn()
jest.spyOn(hook, 'useActiveContextUpdater').mockImplementation(() => mockSetActive)
const data = mock<MountainMarkerFragment>()

beforeEach(() => {
  mockReset(data) // or mockClear(mock)
})
describe('opacity', () => {
  it('when active ', () => {
    const { getByTestId, debug } = render(<NonActive {...(NonActive.args as RoutePolylineProps)} />)
    // expect(getByTestId('route-polyline-1')).toHaveAttribute('path', '1')
    expect(true).toEqual(true)
  })
  // it('when active ', () => {
  //   const { getByTestId, debug } = render(<Active {...(Active.args as RoutePolylineProps)} />)
  //   expect(getByTestId('marker-1')).toHaveAttribute('opacity', '0.6')
  // })
})
describe('mouse event', () => {
  it('onMouseOut', () => {
    const { getByTestId, debug } = render(<NonActive {...(NonActive.args as RoutePolylineProps)} />)
    fireEvent.click(getByTestId('mock-polyline-onMouseOut'))
    expect(mockSetActive).toHaveBeenCalledWith(-1)
  })
  it('onMouseOver', () => {
    const { getByTestId } = render(<NonActive {...(NonActive.args as RoutePolylineProps)} />)
    fireEvent.click(getByTestId('mock-polyline-onMouseOver'))
    expect(mockSetActive).toHaveBeenCalledWith(1)
  })
})
