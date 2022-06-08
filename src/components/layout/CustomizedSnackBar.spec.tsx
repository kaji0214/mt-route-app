import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CustomizedSnackbars from './CustomizedSnackbars'
import { ToastContextState, ToastType } from '@/src/contexts/ToastContext/ToastContextProvider'
import { IsToastOpenContextState } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import { IsToastOpenContextUpdater } from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

const mockSetIsToastOpen = jest.fn()

const customRender = (ui: any, toast: ToastType, isToastOpen: boolean) =>
  render(
    <ToastContextState.Provider value={toast}>
      <IsToastOpenContextState.Provider value={isToastOpen}>
        <IsToastOpenContextUpdater.Provider value={mockSetIsToastOpen}>
          {ui}
        </IsToastOpenContextUpdater.Provider>
      </IsToastOpenContextState.Provider>
    </ToastContextState.Provider>,
  )
describe('not render toast content', () => {
  it('success', () => {
    const { queryByText } = customRender(<CustomizedSnackbars />, undefined, false)
    expect(queryByText('success')).toBeNull()
  })
})
describe('handle close', () => {
  it('should be closed', () => {
    const { getByTitle } = customRender(<CustomizedSnackbars />, 'success', true)
    fireEvent.click(getByTitle('Close'))
    expect(mockSetIsToastOpen).toHaveBeenCalledWith(false)
  })
})

describe('render toast content', () => {
  it('success', () => {
    const { getByText } = customRender(<CustomizedSnackbars />, 'success', true)
    expect(getByText('success')).toBeTruthy()
  })
  it('error', () => {
    const { getByText } = customRender(<CustomizedSnackbars />, 'error', true)
    expect(getByText('failed')).toBeTruthy()
  })
  it('warning', () => {
    const { getByText } = customRender(<CustomizedSnackbars />, 'warning', true)
    expect(getByText('warning')).toBeTruthy()
  })
  it('info', () => {
    const { getByText } = customRender(<CustomizedSnackbars />, 'info', true)
    expect(getByText('info')).toBeTruthy()
  })
})
