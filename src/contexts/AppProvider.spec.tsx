import { render } from '@testing-library/react'
import AppProvider from '@/src/contexts/AppProvider'

afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
it('should render children', async () => {
  const { getByText } = render(
    <AppProvider>
      <div>foo</div>
    </AppProvider>,
  )
  expect(getByText('foo')).toBeTruthy()
})
