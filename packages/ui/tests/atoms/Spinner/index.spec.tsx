import { render, screen } from '@testing-library/react-native';

import { Spinner } from '../../../';

describe('<Spinner />', () => {
  describe('Both (iOS and Android)', () => {
    it('Should render Spinner component', () => {
      render(<Spinner useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toBeOnTheScreen();
    });

    it("Should render Spinner component with accessibility label as 'Loading' text", () => {
      render(<Spinner useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveAccessibleName('Loading');
    });

    it('Should take a snapshot of the Spinner component', () => {
      const component = render(<Spinner useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });
});
