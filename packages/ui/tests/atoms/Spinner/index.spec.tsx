import { ColorValue, Platform } from 'react-native';
import { colors, spacings, SpacingsObjectType } from '@aero-ui/tokens';
import { render, screen } from '@testing-library/react-native';

import {
  Spinner,
  SpinnerSizeType,
  SpinnerStartByType,
  SpinnerVariantType,
} from '../../../';
import { mockPlatform } from '../../mocks';

interface SpinnerSizeIOSProps {
  width: number;
  height: number;
}

interface SpinnerStartByStylesProps {
  borderTopColor: ColorValue;
  borderRightColor: ColorValue;
  borderBottomColor: ColorValue;
  borderLeftColor: ColorValue;
}

interface SpinnerStartByStylesStubProps {
  variant: SpinnerVariantType;
  startBy: SpinnerStartByType;
  color: ColorValue;
  overlayColor: ColorValue;
}

type SutTypes = {
  spinnerSizeIOSStub(size: SpinnerSizeType): SpinnerSizeIOSProps;
  spinnerStartByStylesStub(
    props: SpinnerStartByStylesStubProps
  ): SpinnerStartByStylesProps;
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

function getSpinnerStartByStylesStub(
  props: SpinnerStartByStylesStubProps
): SpinnerStartByStylesProps {
  const { color, overlayColor, variant, startBy } = props;

  const doubleColor = variant === 'double' ? color : overlayColor;
  const halfColor = variant === 'half' ? color : overlayColor;

  const startByStyles: Record<SpinnerStartByType, SpinnerStartByStylesProps> = {
    bottom: {
      borderTopColor: doubleColor,
      borderRightColor: overlayColor,
      borderBottomColor: color,
      borderLeftColor: halfColor,
    },

    left: {
      borderTopColor: halfColor,
      borderRightColor: doubleColor,
      borderBottomColor: overlayColor,
      borderLeftColor: color,
    },

    right: {
      borderTopColor: overlayColor,
      borderRightColor: color,
      borderBottomColor: halfColor,
      borderLeftColor: doubleColor,
    },

    top: {
      borderTopColor: color,
      borderRightColor: halfColor,
      borderBottomColor: doubleColor,
      borderLeftColor: overlayColor,
    },
  };

  return startByStyles[startBy];
}

function makeSut(): SutTypes {
  return {
    spinnerSizeIOSStub: getSpinnerSizeIOSStub,
    spinnerStartByStylesStub: getSpinnerStartByStylesStub,
  };
}

describe('<Spinner />', () => {
  describe('iOS', () => {
    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it('Should render Spinner component with default properties', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub, spinnerStartByStylesStub } = makeSut();

      render(<Spinner useNativeDriver={false} />);
      const component = screen.getByTestId('spinner');
      const startByStyles = spinnerStartByStylesStub({
        variant: 'unique',
        startBy: 'left',
        color: colors.black[100],
        overlayColor: 'transparent',
      });
      expect(component).toHaveStyle(spinnerSizeIOSStub('normal'));
      expect(component).toHaveStyle(startByStyles);
      expect(component).toBeOnTheScreen();
    });

    it("Should render Spinner component with accessibility label as 'Loading' text", () => {
      mockPlatform('ios');

      render(<Spinner useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveAccessibleName('Loading');
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

    it('Should render Spinner component with default properties', () => {
      mockPlatform('android');

      render(<Spinner useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveProp(
        'color',
        colors.black[100]
      );
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[8]);
      expect(screen.getByTestId('spinner')).toBeOnTheScreen();
    });

    it("Should render Spinner component with accessibility label as 'Loading' text", () => {
      mockPlatform('android');

      render(<Spinner useNativeDriver={false} />);
      expect(screen.getByTestId('spinner')).toHaveAccessibleName('Loading');
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
