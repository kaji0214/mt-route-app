import { renderHook } from '@testing-library/react'
import { useSetSideMenuWidth } from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'

const mockSetMenuWidth = jest.fn()
jest.mock('@/src/contexts/AppContext', () => {
  return {
    __esModule: true,
    useAppContext: jest.fn().mockImplementation(() => ({ setMenuWidth: mockSetMenuWidth })),
  }
})
describe('onClickAddRoute', () => {
  test('allows you to undo and redo', () => {
    renderHook(() => useSetSideMenuWidth(100))
    expect(mockSetMenuWidth).toHaveBeenCalledWith(100)
  })
})
