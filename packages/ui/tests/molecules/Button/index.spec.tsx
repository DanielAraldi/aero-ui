import { Platform, StyleProp, ViewStyle } from 'react-native';
import { borderWidths, colors, spacings } from '@aero-ui/tokens';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { faker } from '@faker-js/faker';

import { Button, ButtonProps, Spinner, Text } from '../../../';
import { mockPlatform } from '../../mocks';
import { animatedSpy } from '../../spies';

const defaultProps: ButtonProps = {
  useNativeDriver: false,
};

describe('<Button />', () => {
  describe('Both (iOS and Android)', () => {
    afterEach(() => {
      animatedSpy('timing');
    });

    it('Should render Button component with default properties', () => {
      render(<Button {...defaultProps} />);

      const wrapper = screen.getByTestId('wrapper');
      const pressable = screen.getByTestId('pressable');
      const text = screen.getByTestId('text');
      const spinner = screen.queryByTestId('spinner');

      expect(wrapper).toHaveStyle({
        width: '100%',
        transform: [{ scale: 1 }],
      });

      expect(pressable).toHaveStyle({
        backgroundColor: colors.blue[500],
      });
      expect(pressable).not.toHaveStyle({
        backgroundColor: colors.blue[400],
      });
      expect(pressable).not.toHaveStyle({
        backgroundColor: colors.blue[300],
      });
      expect(pressable).not.toBeDisabled();

      expect(text).toHaveProp('children', undefined);
      expect(text).toHaveStyle({
        color: colors.white[100],
      });

      expect(wrapper).toBeOnTheScreen();
      expect(pressable).toBeOnTheScreen();
      expect(text).toBeOnTheScreen();
      expect(spinner).toBeNull();
    });

    it('Should receive children to be shown in Button component as a title', () => {
      const words = faker.word.words({ count: { min: 1, max: 5 } });

      render(<Button {...defaultProps}>{words}</Button>);

      const text = screen.getByTestId('text');

      expect(text).toHaveProp('children', words);
    });

    it("Should render Button component with primary variant and change your color when it's pressed", () => {
      render(<Button variant='primary' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultPrimaryStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.blue[500],
        borderColor: colors.white[100],
      };

      expect(pressable).toHaveStyle(defaultPrimaryStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.blue[400],
        borderColor: colors.blue[100],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultPrimaryStyle);
    });

    it("Should render Button component with secondary variant and change your color when it's pressed", () => {
      render(<Button variant='secondary' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultSecondaryStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.white[100],
        borderColor: colors.black[100],
      };

      expect(pressable).toHaveStyle(defaultSecondaryStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.white[85],
        borderColor: colors.black[85],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultSecondaryStyle);
    });

    it("Should render Button component with tertiary variant and change your color when it's pressed", () => {
      render(<Button variant='tertiary' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultTertiaryStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.stone[900],
        borderColor: colors.white[100],
      };

      expect(pressable).toHaveStyle(defaultTertiaryStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.stone[800],
        borderColor: colors.stone[100],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultTertiaryStyle);
    });

    it("Should render Button component with success variant and change your color when it's pressed", () => {
      render(<Button variant='success' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultSuccessStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.green[500],
        borderColor: colors.white[100],
      };

      expect(pressable).toHaveStyle(defaultSuccessStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.green[400],
        borderColor: colors.green[100],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultSuccessStyle);
    });

    it("Should render Button component with ghost variant and change your color when it's pressed", () => {
      render(<Button variant='ghost' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultGhostStyle: StyleProp<ViewStyle> = {
        backgroundColor: 'transparent',
        borderColor: colors.black[100],
      };

      expect(pressable).toHaveStyle(defaultGhostStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: 'transparent',
        borderColor: colors.black[85],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultGhostStyle);
    });

    it("Should render Button component with danger variant and change your color when it's pressed", () => {
      render(<Button variant='danger' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultDangerStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.red[500],
        borderColor: colors.white[100],
      };

      expect(pressable).toHaveStyle(defaultDangerStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.red[400],
        borderColor: colors.red[100],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultDangerStyle);
    });

    it("Should render Button component with warning variant and change your color when it's pressed", () => {
      render(<Button variant='warning' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultWarningStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.yellow[500],
        borderColor: colors.white[100],
      };

      expect(pressable).toHaveStyle(defaultWarningStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.yellow[400],
        borderColor: colors.yellow[100],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultWarningStyle);
    });

    it("Should render Button component with neutral variant and change your color when it's pressed", () => {
      render(<Button variant='neutral' bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      const defaultNeutralStyle: StyleProp<ViewStyle> = {
        backgroundColor: colors.neutral[500],
        borderColor: colors.white[100],
      };

      expect(pressable).toHaveStyle(defaultNeutralStyle);

      fireEvent(pressable, 'pressIn');

      expect(pressable).toHaveStyle({
        backgroundColor: colors.neutral[400],
        borderColor: colors.neutral[100],
      });

      fireEvent(pressable, 'pressOut');

      expect(pressable).toHaveStyle(defaultNeutralStyle);
    });

    it('Should render Button component with primary variant disabled', () => {
      render(<Button variant='primary' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.blue[300],
        borderColor: colors.blue[50],
      });
    });

    it('Should render Button component with secondary variant disabled', () => {
      render(
        <Button variant='secondary' disabled bordered {...defaultProps} />
      );

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.white[85],
        borderColor: colors.black[50],
      });
    });

    it('Should render Button component with tertiary variant disabled', () => {
      render(<Button variant='tertiary' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.stone[700],
        borderColor: colors.stone[50],
      });
    });

    it('Should render Button component with success variant disabled', () => {
      render(<Button variant='success' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.green[300],
        borderColor: colors.green[50],
      });
    });

    it('Should render Button component with ghost variant disabled', () => {
      render(<Button variant='ghost' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: 'transparent',
        borderColor: colors.black[50],
      });
    });

    it('Should render Button component with danger variant disabled', () => {
      render(<Button variant='danger' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.red[300],
        borderColor: colors.red[50],
      });
    });

    it('Should render Button component with warning variant disabled', () => {
      render(<Button variant='warning' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.yellow[300],
        borderColor: colors.yellow[50],
      });
    });

    it('Should render Button component with neutral variant disabled', () => {
      render(<Button variant='neutral' disabled bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.neutral[300],
        borderColor: colors.neutral[50],
      });
    });

    it('Should render Button component with hugWidth as true', () => {
      render(<Button hugWidth {...defaultProps} />);

      const wrapper = screen.getByTestId('wrapper');
      const pressable = screen.getByTestId('pressable');

      expect(wrapper).toHaveStyle({
        width: '100%',
      });

      expect(pressable).toHaveStyle({
        paddingHorizontal: spacings[2],
      });
    });

    it('Should render Button component with hugWidth as false', () => {
      render(<Button hugWidth={false} {...defaultProps} />);

      const wrapper = screen.getByTestId('wrapper');
      const pressable = screen.getByTestId('pressable');

      expect(wrapper).toHaveStyle({
        width: 'auto',
      });

      expect(pressable).toHaveStyle({
        paddingHorizontal: spacings[5],
      });
    });

    it('Should render Button component with border when bordered is true', () => {
      render(<Button bordered {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toHaveStyle({
        borderWidth: borderWidths.px,
        borderColor: colors.white[100],
      });
    });

    it('Should render Button component without border when bordered is false', () => {
      render(<Button bordered={false} {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toHaveStyle({
        borderWidth: undefined,
        borderColor: undefined,
      });
    });

    it('Should call onPressIn when the Button component is pressed', () => {
      const onPressIn = jest.fn(() => {});

      render(<Button onPressIn={onPressIn} {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      fireEvent(pressable, 'pressIn');

      expect(onPressIn).toHaveBeenCalledTimes(1);
    });

    it('Should call onPressOut when the Button component is pressed', () => {
      const onPressOut = jest.fn(() => {});

      render(<Button onPressOut={onPressOut} {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');

      fireEvent(pressable, 'pressOut');

      expect(onPressOut).toHaveBeenCalledTimes(1);
    });

    it('Should remain with opacity in 100% when Button component is enabled and not pressed', () => {
      render(<Button {...defaultProps} />);

      const content = screen.getByTestId('content');

      expect(content).toHaveStyle({
        opacity: 1,
      });
    });

    it('Should remain with opacity in 85% when Button component is pressed', () => {
      render(<Button {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');
      const content = screen.getByTestId('content');

      const defaultContentStyle: StyleProp<ViewStyle> = {
        opacity: 1,
      };

      expect(content).toHaveStyle(defaultContentStyle);

      fireEvent(pressable, 'pressIn');

      expect(content).toHaveStyle({
        opacity: 0.85,
      });

      fireEvent(pressable, 'pressOut');

      expect(content).toHaveStyle(defaultContentStyle);
    });

    it('Should remain with opacity in 75% when Button component is disabled', () => {
      render(<Button disabled {...defaultProps} />);

      const content = screen.getByTestId('content');

      expect(content).toHaveStyle({
        opacity: 0.75,
      });
    });

    it('Should render Button component with customized Text component', () => {
      const words = faker.word.words({ count: { min: 1, max: 5 } });

      render(
        <Button {...defaultProps}>
          <Text testID='custom-text'>{words}</Text>
        </Button>
      );

      const wrapper = screen.getByTestId('wrapper');
      const customText = screen.getByTestId('custom-text');

      expect(customText).toHaveProp('children', words);
      expect(customText).toBeOnTheScreen();
      expect(wrapper).toBeOnTheScreen();
    });

    it('Should render Button component with customized Spinner component', () => {
      animatedSpy('loop');

      render(
        <Button loading {...defaultProps}>
          <Spinner testID='custom-spinner' useNativeDriver={false} />
        </Button>
      );

      const wrapper = screen.getByTestId('wrapper');
      const customSpinner = screen.getByTestId('custom-spinner');

      expect(customSpinner).toBeOnTheScreen();
      expect(wrapper).toBeOnTheScreen();
    });

    it('Should render Button component with the Text as priority component', () => {
      const words = faker.word.words({ count: { min: 1, max: 5 } });

      render(
        <Button {...defaultProps}>
          <Text testID='custom-text'>{words}</Text>

          <Spinner testID='custom-spinner' useNativeDriver={false} />
        </Button>
      );

      const wrapper = screen.getByTestId('wrapper');
      const customText = screen.getByTestId('custom-text');
      const customSpinner = screen.queryByTestId('custom-spinner');

      expect(customText).toBeOnTheScreen();
      expect(customSpinner).not.toBeOnTheScreen();
      expect(wrapper).toBeOnTheScreen();
    });

    it('Should render Button component with the Spinner as priority component when loading is true', () => {
      animatedSpy('loop');

      const words = faker.word.words({ count: { min: 1, max: 5 } });

      render(
        <Button loading {...defaultProps}>
          <Text testID='custom-text'>{words}</Text>

          <Spinner testID='custom-spinner' useNativeDriver={false} />
        </Button>
      );

      const wrapper = screen.getByTestId('wrapper');
      const customText = screen.queryByTestId('custom-text');
      const customSpinner = screen.getByTestId('custom-spinner');

      expect(customText).not.toBeOnTheScreen();
      expect(customSpinner).toBeOnTheScreen();
      expect(wrapper).toBeOnTheScreen();
    });

    it('Should render Button component with more than one Text component', () => {
      animatedSpy('loop');

      const words = faker.word.words({ count: { min: 1, max: 5 } });

      render(
        <Button {...defaultProps}>
          <Text testID='custom-text-one'>{words}</Text>

          <Text testID='custom-text-two'>{words}</Text>
        </Button>
      );

      const wrapper = screen.getByTestId('wrapper');
      const customTextOne = screen.queryByTestId('custom-text-one');
      const customTextTwo = screen.getByTestId('custom-text-two');

      expect(customTextOne).toBeOnTheScreen();
      expect(customTextTwo).toBeOnTheScreen();
      expect(wrapper).toBeOnTheScreen();
    });

    it('Should take a snapshot of the Button component', () => {
      const component = render(<Button {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('iOS', () => {
    afterAll(() => {
      animatedSpy('timing');
      animatedSpy('loop');
    });

    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it("Should render Button component with Spinner when it's loading", () => {
      mockPlatform('ios');

      render(<Button loading {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');
      const spinner = screen.getByTestId('spinner');
      const text = screen.queryByTestId('text');

      expect(pressable).toBeDisabled();
      expect(spinner).toHaveStyle({
        width: spacings[6],
        height: spacings[6],
        borderTopColor: colors.white[25],
        borderRightColor: colors.white[25],
        borderBottomColor: colors.white[100],
        borderLeftColor: colors.white[100],
      });
      expect(spinner).toBeOnTheScreen();
      expect(text).not.toBeOnTheScreen();
    });

    it("Should take a snapshot of the Button component when it's loading", () => {
      mockPlatform('ios');

      const component = render(<Button loading {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Android', () => {
    afterAll(() => {
      animatedSpy('timing');
      animatedSpy('loop');
    });

    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it("Should render Button component with Spinner when it's loading", () => {
      mockPlatform('android');

      render(<Button loading {...defaultProps} />);

      const pressable = screen.getByTestId('pressable');
      const spinner = screen.getByTestId('spinner');
      const text = screen.queryByTestId('text');

      expect(pressable).toBeDisabled();
      expect(spinner).toHaveProp('size', spacings[6]);
      expect(spinner).toHaveProp('color', colors.white[100]);
      expect(spinner).toBeOnTheScreen();
      expect(text).not.toBeOnTheScreen();
    });

    it("Should take a snapshot of the Button component when it's loading", () => {
      mockPlatform('android');

      const component = render(<Button loading {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
  });
});
