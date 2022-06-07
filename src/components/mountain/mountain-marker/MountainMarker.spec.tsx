import { fireEvent, render } from '@testing-library/react'
import { mock, mockReset } from 'jest-mock-extended'
import { MountainMarkerFragment } from '@/graphql/generated/client'
import { NonActive, Active } from '@/src/components/mountain/mountain-marker/MountainMarker.stories'
import { MountainMarkerProps } from '@/src/components/mountain/mountain-marker/MountainMarker'
import * as hook from '@/src/contexts/ActiveContext/ActiveContextProvider'
const mockSetActive = jest.fn()
jest.spyOn(hook, 'useActiveContextUpdater').mockImplementation(() => mockSetActive)

const data = mock<MountainMarkerFragment>()

beforeEach(() => {
  mockReset(data) // or mockClear(mock)
})
afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
describe('opacity', () => {
  it('when active ', () => {
    const { getByTestId, debug } = render(
      <NonActive {...(NonActive.args as MountainMarkerProps)} />,
    )
    expect(getByTestId('mock-marker')).toHaveAttribute('data-opacity', '1')
  })
  it('when active ', () => {
    const { getByTestId, debug } = render(<Active {...(Active.args as MountainMarkerProps)} />)
    expect(getByTestId('mock-marker')).toHaveAttribute('data-opacity', '0.6')
  })
})
describe('mouse event', () => {
  it('onMouseOut', () => {
    const { getByTestId } = render(<NonActive {...(NonActive.args as MountainMarkerProps)} />)
    fireEvent.click(getByTestId('mock-marker-onMouseOut'))
    expect(mockSetActive).toHaveBeenCalledWith(-1)
  })
  it('onMouseOver', () => {
    const { getByTestId } = render(<NonActive {...(NonActive.args as MountainMarkerProps)} />)
    fireEvent.click(getByTestId('mock-marker-onMouseOver'))
    expect(mockSetActive).toHaveBeenCalledWith(1)
  })
})
