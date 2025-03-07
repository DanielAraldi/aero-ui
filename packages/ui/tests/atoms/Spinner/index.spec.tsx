import { Platform } from 'react-native';
import { colors, spacings, SpacingsObjectType } from '@aero-ui/tokens';
import { render, screen } from '@testing-library/react-native';

import { Spinner, SpinnerSizeType } from '../../../';
import { mockPlatform } from '../../mocks';

interface SpinnerSizeIOSProps {
  width: number;
  height: number;
}

type SutTypes = {
  spinnerSizeIOSStub(size: SpinnerSizeType): SpinnerSizeIOSProps;
};

function getSpinnerSizeIOSStub(size: SpinnerSizeType): SpinnerSizeIOSProps {
  const sizes: Record<
    SpinnerSizeType,
    SpacingsObjectType[keyof SpacingsObjectType]
  > = {
    large: spacings[10],
    normal: spacings[8],
    small: spacings[6],
  };

  return {
    width: sizes[size],
    height: sizes[size],
  };
}

function makeSut(): SutTypes {
  return {
    spinnerSizeIOSStub: getSpinnerSizeIOSStub,
  };
}

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
  });

  describe('iOS', () => {
    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it('Should render Spinner component with normal size', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub } = makeSut();

      render(<Spinner size='normal' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle(
        spinnerSizeIOSStub('normal')
      );
    });

    it('Should render Spinner component with small size', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub } = makeSut();

      render(<Spinner size='small' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle(
        spinnerSizeIOSStub('small')
      );
    });

    it('Should render Spinner component with large size', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub } = makeSut();

      render(<Spinner size='large' useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveStyle(
        spinnerSizeIOSStub('large')
      );
    });

    it('Should take a snapshot of the Spinner component', () => {
      mockPlatform('ios');

      const component = render(<Spinner useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
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

    it('Should take a snapshot of the Spinner component', () => {
      mockPlatform('android');

      const component = render(<Spinner useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });
});
