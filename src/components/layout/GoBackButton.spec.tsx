import React from 'react'
import GoBackButton from './GoBackButton'
import { fireEvent, screen, render } from '@testing-library/react'

const mockPush = jest.fn(() => Promise.resolve(true))
jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: {},
    pathname: '/',
    asPath: '/',
    events: {
      emit: jest.fn(),
      on: jest.fn(),
      off: jest.fn(),
    },
    push: mockPush,
    prefetch: jest.fn(() => Promise.resolve(true)),
    replace: jest.fn(() => Promise.resolve(true)),
  }),
}))

it('renders correctly', () => {
  render(<GoBackButton url={'foo'} />)

  const button = screen.getByTestId('go-back-button')
  fireEvent.click(button, { target: { value: '200' } })
  expect(mockPush).toHaveBeenCalledWith('foo')
})
