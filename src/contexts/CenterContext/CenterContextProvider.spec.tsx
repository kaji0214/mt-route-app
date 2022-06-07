import {
  CenterContextProvider,
  useCenterContextState,
  useCenterContextUpdater,
} from '@/src/contexts/CenterContext/CenterContextProvider'
import { act, fireEvent, render } from '@testing-library/react'

it('should update provider value', () => {
  const Foo = () => {
    const state = useCenterContextState()
    const update = useCenterContextUpdater()
    return (
      <div>
        <div>Received: {state ? `lat: ${state.lat}, lng: ${state.lng}` : 'undefined'}</div>
        <button onClick={() => update({ lat: 1, lng: 2 })}>update</button>
      </div>
    )
  }
  const { getByText } = render(
    <CenterContextProvider>
      <Foo />
    </CenterContextProvider>,
  )
  expect(getByText(/^Received:/).textContent).toBe('Received: undefined')
  act(() => {
    fireEvent.click(getByText('update'))
  })
  expect(getByText(/^Received:/).textContent).toBe('Received: lat: 1, lng: 2')
})
