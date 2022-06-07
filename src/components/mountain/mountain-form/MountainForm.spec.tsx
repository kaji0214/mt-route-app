import { render, act, screen, fireEvent } from '@testing-library/react'
import MountainForm from '@/src/components/mountain/mountain-form/MountainForm'
import React from 'react'
import { CreateMountain } from '@/pages/mountains/new'
import * as useMountainFormHook from '@/src/hooks/mountain/useMountainFormHook/useMountainFormHook'
import { mock } from 'jest-mock-extended'
import { UseMountainFormHookReturnValues } from '@/src/hooks/mountain/useMountainFormHook/useMountainFormHook'
import * as hook from '@/src/contexts/CenterContext/CenterContextProvider'

const mockSetCenter = jest.fn()
jest.spyOn(hook, 'useCenterContextUpdater').mockImplementation(() => mockSetCenter)
const spyUseMountainFormHook = jest.spyOn(useMountainFormHook, 'useMountainFormHook')
afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
const mockSubmit = jest.fn()

const customRender = (values: any = {}) => {
  return render(
    <MountainForm
      submitText='Create Mountain'
      onSubmit={mockSubmit}
      initialValues={values}
      schema={CreateMountain}
    />,
  )
}
describe('MountainForm check', () => {
  it('should render default values correctly', async () => {
    await act(() => {
      customRender({ name: 'foo', lat: 1, lng: 2 })
    })
    expect(screen.getByDisplayValue('foo')).toBeTruthy()
    expect(screen.getByDisplayValue('1')).toBeTruthy()
    expect(screen.getByDisplayValue('2')).toBeTruthy()
  })
  it('should submit', async () => {
    await act(() => {
      customRender()
    })
    expect(screen.getByText('Create Mountain')).toBeTruthy()
    await act(() => {
      fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Name' } })
      fireEvent.change(screen.getByLabelText('Lat'), { target: { value: '1' } })
      fireEvent.change(screen.getByLabelText('Lng'), { target: { value: '2' } })
    })

    fireEvent.submit(screen.getByText('Create Mountain'))
    expect(mockSubmit).toHaveBeenCalled()
  })
})
describe('useEffect', () => {
  it('when form values is filled', async () => {
    const formValues = { name: 'foo', lat: 1, lng: 2 }
    const returnValues = mock<UseMountainFormHookReturnValues>()
    returnValues.values = formValues
    spyUseMountainFormHook.mockReturnValue(returnValues)
    await act(() => {
      customRender({ lat: 1, lng: 2 })
    })
    expect(mockSetCenter).toHaveBeenCalledWith({ lat: 1, lng: 2 })
  })
  it('when form values is empty', async () => {
    const mockSetCenter = jest.fn()
    const returnValues = mock<UseMountainFormHookReturnValues>()
    spyUseMountainFormHook.mockReturnValue({ ...returnValues, values: undefined })
    await act(() => {
      customRender()
    })
    expect(mockSetCenter).not.toHaveBeenCalled()
  })
})
