import { AppConsumer, AppProvider } from '@/src/contexts/AppContext'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(<AppProvider {...providerProps}>{ui}</AppProvider>, renderOptions)
}

/**
 * To test a component that provides a context value, render a matching
 * consumer as the child
 */
test('NameProvider composes full name from first, last', () => {
  const providerProps = {
    menuWidth: 100,
  }
  // @ts-ignore
  customRender(<AppConsumer>{(value) => <span>Received: {value}</span>}</AppConsumer>, {
    providerProps,
  })
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: ')
})
