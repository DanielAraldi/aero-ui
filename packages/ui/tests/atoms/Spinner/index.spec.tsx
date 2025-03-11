import { ColorValue } from 'react-native';
import { colors, spacings, SpacingsObjectType } from '@aero-ui/tokens';
import { render, screen } from '@testing-library/react-native';

import {
  Spinner,
  SpinnerProps,
  SpinnerSizeType,
  SpinnerStartByType,
  SpinnerVariantType,
} from '../../../';
import { mockPlatform, mockRGB } from '../../mocks';
import { animatedSpy } from '../../spies';

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

const defaultProps: SpinnerProps = {
  useNativeDriver: false,
};

describe('<Spinner />', () => {
  describe('iOS', () => {
    afterEach(() => {
      animatedSpy('loop');
    });

    it('Should render Spinner component with default properties', () => {
      animatedSpy('loop');
      mockPlatform('ios');

      const { spinnerSizeIOSStub, spinnerStartByStylesStub } = makeSut();

      render(<Spinner {...defaultProps} />);

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

      render(<Spinner {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveAccessibleName('Loading');
    });

    it('Should render Spinner component with normal size', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub } = makeSut();

      render(<Spinner size='normal' {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveStyle(
        spinnerSizeIOSStub('normal')
      );
    });

    it('Should render Spinner component with small size', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub } = makeSut();

      render(<Spinner size='small' {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveStyle(
        spinnerSizeIOSStub('small')
      );
    });

    it('Should render Spinner component with large size', () => {
      mockPlatform('ios');

      const { spinnerSizeIOSStub } = makeSut();

      render(<Spinner size='large' {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveStyle(
        spinnerSizeIOSStub('large')
      );
    });

    it('Should render Spinner component with unique variant, left startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='unique'
          startBy='left'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'unique',
        startBy: 'left',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with unique variant, right startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='unique'
          startBy='right'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'unique',
        startBy: 'right',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with unique variant, top startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='unique'
          startBy='top'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'unique',
        startBy: 'top',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with unique variant, bottom startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='unique'
          startBy='bottom'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'unique',
        startBy: 'bottom',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with double variant, left startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='double'
          startBy='left'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'double',
        startBy: 'left',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with double variant, right startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='double'
          startBy='right'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'double',
        startBy: 'right',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with double variant, top startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='double'
          startBy='top'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'double',
        startBy: 'top',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with double variant, bottom startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='double'
          startBy='bottom'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'double',
        startBy: 'bottom',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with half variant, left startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='half'
          startBy='left'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'half',
        startBy: 'left',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with half variant, right startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='half'
          startBy='right'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'half',
        startBy: 'right',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with half variant, top startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='half'
          startBy='top'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'half',
        startBy: 'top',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should render Spinner component with half variant, bottom startBy and colors provided', () => {
      mockPlatform('ios');

      const { spinnerStartByStylesStub } = makeSut();

      const color = mockRGB();
      const overlayColor = mockRGB();

      render(
        <Spinner
          variant='half'
          startBy='bottom'
          color={color}
          overlayColor={overlayColor}
          {...defaultProps}
        />
      );

      const startByStyles = spinnerStartByStylesStub({
        variant: 'half',
        startBy: 'bottom',
        color,
        overlayColor,
      });

      expect(screen.getByTestId('spinner')).toHaveStyle(startByStyles);
    });

    it('Should take a snapshot of the Spinner component', () => {
      mockPlatform('ios');

      const component = render(<Spinner {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Android', () => {
    it('Should render Spinner component with default properties', () => {
      mockPlatform('android');

      render(<Spinner {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveProp(
        'color',
        colors.black[100]
      );
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[8]);
      expect(screen.getByTestId('spinner')).toBeOnTheScreen();
    });

    it("Should render Spinner component with accessibility label as 'Loading' text", () => {
      mockPlatform('android');

      render(<Spinner {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveAccessibleName('Loading');
    });

    it('Should render Spinner component with normal size', () => {
      mockPlatform('android');

      render(<Spinner size='normal' {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[8]);
    });

    it('Should render Spinner component with small size', () => {
      mockPlatform('android');

      render(<Spinner size='small' {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[6]);
    });

    it('Should render Spinner component with large size', () => {
      mockPlatform('android');

      render(<Spinner size='large' {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveProp('size', spacings[10]);
    });

    it('Should render Spinner component with color provided', () => {
      mockPlatform('android');

      render(<Spinner color={colors.blue[400]} {...defaultProps} />);
      expect(screen.getByTestId('spinner')).toHaveProp(
        'color',
        colors.blue[400]
      );
    });

    it('Should take a snapshot of the Spinner component', () => {
      mockPlatform('android');

      const component = render(<Spinner {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
  });
});
