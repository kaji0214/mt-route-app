import { act, renderHook } from '@testing-library/react'
import { useListMountainsHook } from '@/src/hooks/mountain/useListMountainsHook/useListMountainsHook'

const props = { called: true, loading: false }
describe('onSearch', () => {
  it(' should be default', () => {
    const { result } = renderHook(() => useListMountainsHook(props))
    expect(result.current.keyword).toEqual('')
    expect(result.current.changed).toEqual(false)
  })
  it(' should have values on search', () => {
    const { result } = renderHook(() => useListMountainsHook(props))
    act(() => {
      result.current.onSearch({ keyword: 'foo' })
    })
    expect(result.current.keyword).toEqual('foo')
    expect(result.current.changed).toEqual(true)
  })
})
describe('onSearched', () => {
  it('should change changed value', () => {
    const { result } = renderHook(() => useListMountainsHook(props))
    expect(result.current.changed).toEqual(false)
    act(() => {
      result.current.onSearch({ keyword: 'foo' })
    })
    expect(result.current.changed).toEqual(true)

    act(() => {
      result.current.onSearched()
    })
    expect(result.current.changed).toEqual(false)
  })
})
describe('shouldSearch', () => {
  it('when only called is true', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: true, loading: false }))
    expect(result.current.shouldSearch()).toEqual(false)
  })
  it('when only loading is true', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: false, loading: true }))
    expect(result.current.shouldSearch()).toEqual(false)
  })
  it('when only changed is true', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: false, loading: false }))
    act(() => {
      result.current.onSearch({ keyword: 'foo' })
    })
    expect(result.current.shouldSearch()).toEqual(false)
  })
  it('when only called is false', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: false, loading: true }))
    act(() => {
      result.current.onSearch({ keyword: 'foo' })
    })
    expect(result.current.shouldSearch()).toEqual(false)
  })
  it('when only loading is false', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: true, loading: false }))
    act(() => {
      result.current.onSearch({ keyword: 'foo' })
    })
    expect(result.current.shouldSearch()).toEqual(true)
  })
  it('when only changed is false', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: true, loading: true }))
    expect(result.current.shouldSearch()).toEqual(false)
  })
  it('when all are true', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: true, loading: true }))
    act(() => {
      result.current.onSearch({ keyword: 'foo' })
    })
    expect(result.current.shouldSearch()).toEqual(false)
  })
  it('when all are false', () => {
    const { result } = renderHook(() => useListMountainsHook({ called: false, loading: false }))
    expect(result.current.shouldSearch()).toEqual(false)
  })
})
