import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  IsToastOpenContextProvider,
  useIsToastOpenContextState,
  useIsToastOpenContextUpdater,
} from '@/src/contexts/IsToastOpenContext/IsToastOpenContextProvider'

it('should update provider value', () => {
  const Foo = () => {
    const state = useIsToastOpenContextState()
    const update = useIsToastOpenContextUpdater()
    return (
      <div>
        <div>Received: {state ? 'true' : 'false'}</div>
        <button onClick={() => update(true)}>update</button>
      </div>
    )
  }
  const { getByText } = render(
    <IsToastOpenContextProvider>
      <Foo />
    </IsToastOpenContextProvider>,
  )
  expect(getByText(/^Received:/).textContent).toBe('Received: false')
  act(() => {
    fireEvent.click(getByText('update'))
  })
  expect(getByText(/^Received:/).textContent).toBe('Received: true')
})
