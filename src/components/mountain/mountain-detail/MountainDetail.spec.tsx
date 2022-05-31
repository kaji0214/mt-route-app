import {
  MountainDetailProps,
} from '@/src/components/mountain/mountain-detail/MountainDetail'
import { fireEvent, render } from '@testing-library/react'
import { mock, mockReset } from 'jest-mock-extended'
import { MountainDetailFragment } from '@/graphql/generated/client'
import {
  CanAllMountainDetail,
  CanNotEditMountainDetail,
  CanNotDeleteMountainDetail,
} from './MountainDetail.stories'
const data = mock<MountainDetailFragment>()

beforeEach(() => {
  mockReset(data) // or mockClear(mock)
})
describe('disabled check', () => {
  it('should be able ', () => {
    const { getByText } = render(
      <CanAllMountainDetail {...(CanAllMountainDetail.args as MountainDetailProps)} />,
    )
    expect(getByText('Edit')).not.toBeDisabled()
    expect(getByText('Delete')).not.toBeDisabled()
  })
  it('edit should be disabled ', () => {
    const { getByText } = render(
      <CanNotEditMountainDetail {...(CanNotEditMountainDetail.args as MountainDetailProps)} />,
    )
    expect(getByText('Edit')).toBeDisabled()
  })
  it('delete should be disabled ', () => {
    const { getByText } = render(
      <CanNotDeleteMountainDetail {...(CanNotDeleteMountainDetail.args as MountainDetailProps)} />,
    )
    expect(getByText('Delete')).toBeDisabled()
  })
})
describe('check click event', () => {
  it('click add route button', () => {
    const mockOnClick = jest.fn()
    const props = {
      ...CanAllMountainDetail.args,
      onClickAddRoute: mockOnClick,
    } as MountainDetailProps
    const { getByText } = render(<CanAllMountainDetail {...props} />)
    fireEvent.click(getByText('Add Route'))
    expect(mockOnClick).toHaveBeenCalled()
  })
  it('click edit button', () => {
    const mockOnClick = jest.fn()
    const props = {
      ...CanAllMountainDetail.args,
      onClickEditMountain: mockOnClick,
    } as MountainDetailProps
    const { getByText } = render(<CanAllMountainDetail {...props} />)
    fireEvent.click(getByText('Edit'))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('click delete button', () => {
    const mockOnClick = jest.fn()
    const props = {
      ...CanAllMountainDetail.args,
      onClickDeleteMountain: mockOnClick,
    } as MountainDetailProps
    const { getByText } = render(<CanAllMountainDetail {...props} />)
    fireEvent.click(getByText('Delete'))
    expect(mockOnClick).toHaveBeenCalled()
  })
})
