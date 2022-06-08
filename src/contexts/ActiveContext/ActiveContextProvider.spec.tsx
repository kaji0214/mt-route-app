import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  ActiveContextProvider,
  useActiveContextState,
  useActiveContextUpdater,
} from '@/src/contexts/ActiveContext/ActiveContextProvider'

it('should update provider value', () => {
  const Foo = () => {
    const state = useActiveContextState()
    const update = useActiveContextUpdater()
    return (
      <div>
        <div>Received: {state}</div>
        <button onClick={() => update(1)}>update</button>
      </div>
    )
  }
  const { getByText } = render(
    <ActiveContextProvider>
      <Foo />
    </ActiveContextProvider>,
  )
  expect(getByText(/^Received:/).textContent).toBe('Received: 0')
  act(() => {
    fireEvent.click(getByText('update'))
  })
  expect(getByText(/^Received:/).textContent).toBe('Received: 1')
})
