import { fireEvent, act, render } from '@testing-library/react'

import MountainListForm from '@/src/components/mountain/mountain-list-form/MountainListForm'

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
describe('Auth', () => {
  it('should show children when session exists', async () => {
    const onSubmit = jest.fn()
    const { getByDisplayValue, getByTestId, getByLabelText } = render(
      <MountainListForm onSubmit={onSubmit} />,
    )
    await act(() => {
      fireEvent.change(getByLabelText('Keyword'), { target: { value: 'foo' } })
    })
    expect(getByDisplayValue('foo')).toBeInTheDocument()

    await act(() => {
      fireEvent.submit(getByTestId('Submit'))
    })
    expect(onSubmit).toHaveBeenCalledWith({ keyword: 'foo' })
  })
})
