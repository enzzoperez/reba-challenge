import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './';

const defaultProps = {
  onPress: jest.fn(),
  label: 'Navigate',
};

it('renders correctly', () => {
  const tree = renderer.create(<Button {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
