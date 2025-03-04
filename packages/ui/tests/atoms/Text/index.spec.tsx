import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../../../';

describe('<Text />', () => {
  test('Should render Text component', () => {
    render(<Text />);
    expect(screen.getByTestId('text')).toBeOnTheScreen();
  });
});
