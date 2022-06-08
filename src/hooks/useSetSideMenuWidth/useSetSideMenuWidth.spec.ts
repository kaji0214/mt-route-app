import { renderHook } from '@testing-library/react'
import * as hook from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'
import { useSetSideMenuWidth } from '@/src/hooks/useSetSideMenuWidth/useSetSideMenuWidth'

const spiUseSetSideMenuWidth = jest.spyOn(hook, 'useSetSideMenuWidth')
describe('onClickAddRoute', () => {
  test('allows you to undo and redo', () => {
    renderHook(() => useSetSideMenuWidth(100))
    expect(spiUseSetSideMenuWidth).toHaveBeenCalledWith(100)
  })
})
