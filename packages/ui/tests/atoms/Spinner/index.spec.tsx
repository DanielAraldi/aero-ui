import { Platform } from 'react-native';
import { colors, spacings } from '@aero-ui/tokens';
import { render, screen } from '@testing-library/react-native';

import { Spinner } from '../../../';
import { mockPlatform } from '../../mocks';

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
    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it('Should render Spinner component with normal size', () => {
      mockPlatform('ios');

      render(<Spinner size='normal' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle({
        width: spacings[8],
        height: spacings[8],
      });
    });

    it('Should render Spinner component with small size', () => {
      mockPlatform('ios');

      render(<Spinner size='small' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle({
        width: spacings[6],
        height: spacings[6],
      });
    });

    it('Should render Spinner component with large size', () => {
      mockPlatform('ios');

      render(<Spinner size='large' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle({
        width: spacings[10],
        height: spacings[10],
      });
    });
  });

  describe('Android', () => {
    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it('Should render Spinner component with normal size', () => {
      mockPlatform('android');

      render(<Spinner size='normal' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[8]);
    });

    it('Should render Spinner component with small size', () => {
      mockPlatform('android');

      render(<Spinner size='small' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[6]);
    });

    it('Should render Spinner component with large size', () => {
      mockPlatform('android');

      render(<Spinner size='large' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[10]);
    });

    it('Should render Spinner component with color provided', () => {
      mockPlatform('android');

      render(<Spinner color={colors.blue[400]} useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveProp(
        'color',
        colors.blue[400]
      );
    });
  });
});
