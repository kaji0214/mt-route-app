import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  ToastContextProvider,
  useToastContextState,
  useToastContextUpdater,
} from '@/src/contexts/ToastContext/ToastContextProvider'

it('should update provider value', () => {
  const Foo = () => {
    const state = useToastContextState()
    const update = useToastContextUpdater()
    return (
      <div>
        <div>Received: {state === undefined ? 'undefined' : state}</div>
        <button onClick={() => update('success')}>update</button>
      </div>
    )
  }
  const { getByText } = render(
    <ToastContextProvider>
      <Foo />
    </ToastContextProvider>,
  )
  expect(getByText(/^Received:/).textContent).toBe('Received: undefined')
  act(() => {
    fireEvent.click(getByText('update'))
  })
  expect(getByText(/^Received:/).textContent).toBe('Received: success')
})
