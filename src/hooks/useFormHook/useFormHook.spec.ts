import { cleanup, renderHook } from '@testing-library/react'
import { useFormHook } from '@/src/hooks/useFormHook/useFormHook'
import * as IsToastOpenContextUpdater from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'
import * as ToastContextUpdater from '@/src/contexts/ToastContext/ToastContextProvider'

const mockSetIsToastOpen = jest.fn()
jest
  .spyOn(IsToastOpenContextUpdater, 'useIsToastOpenContextUpdater')
  .mockReturnValue(mockSetIsToastOpen)

const mockSetToast = jest.fn()
jest.spyOn(ToastContextUpdater, 'useToastContextUpdater').mockReturnValue(mockSetToast)

const mockPush = jest.fn()
jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: { mid: 1, rid: 1 },
    push: mockPush,
  }),
}))
afterEach(cleanup)

describe('useFormHook', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })
  test('onSucceeded', () => {
    const { result } = renderHook(() => useFormHook())
    result.current.onSucceeded('foo')

    expect(mockSetToast).toHaveBeenCalledWith('success')
    expect(mockSetIsToastOpen).toHaveBeenCalledWith(true)
    expect(mockPush).toHaveBeenCalledWith('foo')
  })

  test('onFailed', () => {
    const { result } = renderHook(() => useFormHook())
    result.current.onFailed()

    expect(mockSetToast).toHaveBeenCalledWith('error')
    expect(mockSetIsToastOpen).toHaveBeenCalledWith(true)
    expect(mockPush).not.toHaveBeenCalled()
  })
})
