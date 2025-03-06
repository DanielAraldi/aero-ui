import { spacings } from '@aero-ui/tokens';
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

  describe('iOS', () => {
    it('Should render Spinner component with normal size', () => {
      render(<Spinner size='normal' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle({
        width: spacings[8],
        height: spacings[8],
      });
    });

    it('Should render Spinner component with small size', () => {
      render(<Spinner size='small' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle({
        width: spacings[6],
        height: spacings[6],
      });
    });
  });
});
