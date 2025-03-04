import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Spinner } from '../../../';

describe('<Spinner />', () => {
  test('Should render Spinner component', () => {
    render(<Spinner useNativeDriver={false} />);
    expect(screen.getByTestId('spinner')).toBeOnTheScreen();
  });
});
