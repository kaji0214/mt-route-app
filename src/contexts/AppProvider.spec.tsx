import { AppContext, AppContextValues } from './AppContext'
import { fireEvent, render } from '@testing-library/react'
import { ReactElement } from 'react'
import AppProvider from '@/src/contexts/AppProvider'

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
describe('AppContext.Provider', () => {
  const Wrapper = ({ children }: { children: (value: AppContextValues) => ReactElement }) => (
    <AppProvider>
      <div>
        <AppContext.Consumer>{(value) => children(value)}</AppContext.Consumer>
      </div>
    </AppProvider>
  )
  it('isToastOpen', async () => {
    const { getByText } = render(
      <Wrapper>
        {(value) => {
          const { isToastOpen, setIsToastOpen } = value
          return (
            <button onClick={() => setIsToastOpen(!isToastOpen)}>
              {isToastOpen ? 'isToastOpen: open' : 'isToastOpen: close'}
            </button>
          )
        }}
      </Wrapper>,
    )
    expect(getByText('isToastOpen: close')).toBeTruthy()
    fireEvent.click(getByText('isToastOpen: close'))
    expect(getByText('isToastOpen: open')).toBeTruthy()
  })
  it('toast', async () => {
    const { getByText } = render(
      <Wrapper>
        {(value) => {
          const { toast, setToast } = value
          return (
            <div>
              <button onClick={() => setToast('success')}>
                {toast === 'success' ? 'toast: success' : 'set success'}
              </button>
              <button onClick={() => setToast('error')}>
                {toast === 'error' ? 'toast: error' : 'set error'}
              </button>
              <button onClick={() => setToast('warning')}>
                {toast === 'warning' ? 'toast: warning' : 'set warning'}
              </button>
              <button onClick={() => setToast('info')}>
                {toast === 'info' ? 'toast: info' : 'set info'}
              </button>
              <button onClick={() => setToast(undefined)}>
                {toast === undefined ? 'toast: undefined' : 'set undefined'}
              </button>
            </div>
          )
        }}
      </Wrapper>,
    )
    expect(getByText('toast: undefined')).toBeTruthy()
    fireEvent.click(getByText('set success'))
    expect(getByText('toast: success')).toBeTruthy()
    fireEvent.click(getByText('set error'))
    expect(getByText('toast: error')).toBeTruthy()
    fireEvent.click(getByText('set warning'))
    expect(getByText('toast: warning')).toBeTruthy()
    fireEvent.click(getByText('set info'))
    expect(getByText('toast: info')).toBeTruthy()
  })

  it('menuWidth', async () => {
    const { getByText } = render(
      <Wrapper>
        {(value) => {
          const { menuWidth, setMenuWidth } = value
          return (
            <button onClick={() => setMenuWidth(100)}>
              {menuWidth === 240 ? 'menuWidth is 240' : 'menuWidth is not 240'}
            </button>
          )
        }}
      </Wrapper>,
    )
    expect(getByText('menuWidth is 240')).toBeTruthy()
    fireEvent.click(getByText('menuWidth is 240'))
    expect(getByText('menuWidth is not 240')).toBeTruthy()
  })
  it('active', async () => {
    const { getByText } = render(
      <Wrapper>
        {(value) => {
          const { active, setActive } = value
          return (
            <button onClick={() => setActive(1)}>
              {active === -1 ? 'active is -1' : 'active is not -1'}
            </button>
          )
        }}
      </Wrapper>,
    )
    expect(getByText('active is -1')).toBeTruthy()
    fireEvent.click(getByText('active is -1'))
    expect(getByText('active is not -1')).toBeTruthy()
  })
  it('center', async () => {
    const { getByText } = render(
      <Wrapper>
        {(value) => {
          const { center, setCenter } = value
          return (
            <button onClick={() => setCenter({ lat: 1, lng: 1 })}>
              {center ? 'center is defined' : 'center is not defined'}
            </button>
          )
        }}
      </Wrapper>,
    )
    expect(getByText('center is not defined')).toBeTruthy()
    fireEvent.click(getByText('center is not defined'))
    expect(getByText('center is defined')).toBeTruthy()
  })
})
