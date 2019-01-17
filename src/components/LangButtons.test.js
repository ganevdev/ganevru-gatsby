import React from 'react';
import renderer from 'react-test-renderer';

import LangButtons from './LangButtons';

test('Buttons Links', () => {
  const component = renderer.create(
    <LangButtons pathname="/" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
