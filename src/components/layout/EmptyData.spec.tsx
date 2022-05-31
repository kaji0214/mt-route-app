import React from 'react';
import renderer from 'react-test-renderer';
import EmptyData from "./EmptyData";

it('renders correctly', () => {
  const tree = renderer
    .create(<EmptyData />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
