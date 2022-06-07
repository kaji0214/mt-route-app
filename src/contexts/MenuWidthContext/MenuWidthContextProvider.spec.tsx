import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  MenuWidthContextProvider,
  useMenuWidthContextState,
  useMenuWidthContextUpdater,
} from '@/src/contexts/MenuWidthContext/MenuWidthContextProvider'

it('should update provider value', () => {
  const Foo = () => {
    const state = useMenuWidthContextState()
    const update = useMenuWidthContextUpdater()
    return (
      <div>
        <div>Received: {state}</div>
        <button onClick={() => update(1)}>update</button>
      </div>
    )
  }
  const { getByText } = render(
    <MenuWidthContextProvider>
      <Foo />
    </MenuWidthContextProvider>,
  )
  expect(getByText(/^Received:/).textContent).toBe('Received: 240')
  act(() => {
    fireEvent.click(getByText('update'))
  })
  expect(getByText(/^Received:/).textContent).toBe('Received: 1')
})
