import { render, screen } from '@testing-library/react-native';

import { Button } from '../../../';

describe('<Button />', () => {
  test('Should render Button component', () => {
    render(<Button useNativeDriver={false} />);
    expect(screen.getByTestId('button')).toBeOnTheScreen();
  });
});
