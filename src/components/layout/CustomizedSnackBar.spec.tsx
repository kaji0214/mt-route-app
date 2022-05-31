import React from 'react'
import { fireEvent } from '@testing-library/react'
import CustomizedSnackbars from './CustomizedSnackbars'
import { testMockedRender } from '@/src/utils/test-util'
import { AppContext, AppContextValues, appContextValues } from '@/src/contexts/AppContext'

describe('not render toast content', () => {
  it('success', () => {
    const value: AppContextValues = { ...appContextValues, isToastOpen: false, toast: 'success' }

    const { queryByText } = testMockedRender(
      <AppContext.Provider value={value}>
        <CustomizedSnackbars />
      </AppContext.Provider>,
    )
    expect(queryByText('success')).toBeNull()
  })
})
describe('handle close', () => {
  it('should be closed', () => {
    const value: AppContextValues = {
      ...appContextValues,
      isToastOpen: true,
      toast: 'success',
      setIsToastOpen: jest.fn(),
    }

    const { getByTitle, debug } = testMockedRender(
      <AppContext.Provider value={value}>
        <CustomizedSnackbars />
      </AppContext.Provider>,
    )
    fireEvent.click(getByTitle('Close'))
    expect(value.setIsToastOpen).toHaveBeenCalledWith(false)
    // debug()
  })
})

describe('render toast content', () => {
  it('success', () => {
    const value: AppContextValues = { ...appContextValues, isToastOpen: true, toast: 'success' }

    const { getByText } = testMockedRender(
      <AppContext.Provider value={value}>
        <CustomizedSnackbars />
      </AppContext.Provider>,
    )
    expect(getByText('success')).toBeTruthy()
  })
  it('error', () => {
    const value: AppContextValues = { ...appContextValues, isToastOpen: true, toast: 'error' }

    const { getByText } = testMockedRender(
      <AppContext.Provider value={value}>
        <CustomizedSnackbars />
      </AppContext.Provider>,
    )
    expect(getByText('failed')).toBeTruthy()
  })
  it('warning', () => {
    const value: AppContextValues = { ...appContextValues, isToastOpen: true, toast: 'warning' }

    const { getByText } = testMockedRender(
      <AppContext.Provider value={value}>
        <CustomizedSnackbars />
      </AppContext.Provider>,
    )
    expect(getByText('warning')).toBeTruthy()
  })
  it('info', () => {
    const value: AppContextValues = { ...appContextValues, isToastOpen: true, toast: 'info' }

    const { getByText } = testMockedRender(
      <AppContext.Provider value={value}>
        <CustomizedSnackbars />
      </AppContext.Provider>,
    )
    expect(getByText('info')).toBeTruthy()
  })
})
