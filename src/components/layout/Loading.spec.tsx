import React, { ReactElement } from 'react'
import renderer from 'react-test-renderer'
import Loading from './Loading'

jest.mock('./Sidebar', () => {
  return {
    __esModule: true,
    A: true,
    default: ({ children }: { children: ReactElement }) => {
      return <div>{children}</div>
    },
  }
})
it('renders correctly', () => {
  const tree = renderer.create(<Loading />).toJSON()
  expect(tree).toMatchSnapshot()
})
