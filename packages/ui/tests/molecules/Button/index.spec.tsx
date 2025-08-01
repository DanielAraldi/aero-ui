import { Platform, StyleProp, ViewStyle } from 'react-native';
import { borderWidths, colors, opacities, spacings } from '@aero-ui/tokens';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { Button } from '../../../';
import { mockPlatform, mockWords } from '../../mocks';
import { animatedSpy } from '../../spies';

describe('<Button />', () => {
  describe('Both (iOS and Android)', () => {
    afterEach(() => {
      animatedSpy('timing');
    });

    it('Should render Button component with default properties', () => {
      animatedSpy('timing');

      render(<Button />);

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

    it('Should render Button component with accessible properties', () => {
      animatedSpy('timing');

      render(<Button />);

      const component = screen.getByTestId('pressable');

      expect(component).toHaveProp('accessible', true);
      expect(component).toHaveProp('accessibilityRole', 'button');
      expect(component).toHaveProp('accessibilityState', {
        disabled: false,
        selected: false,
        busy: false,
      });
    });

    it('Should render Button component with accessible state properties as false when disabled', () => {
      animatedSpy('timing');

      render(<Button disabled />);

      const component = screen.getByTestId('pressable');

      expect(component).toHaveProp('accessible', true);
      expect(component).toHaveProp('accessibilityRole', 'button');
      expect(component).toHaveProp('accessibilityState', {
        disabled: true,
        selected: false,
        busy: false,
      });
    });

    it('Should render Button component with accessible state properties as false when loading', () => {
      animatedSpy('timing');
      animatedSpy('loop');

      render(<Button loading />);

      const component = screen.getByTestId('pressable');

      expect(component).toHaveProp('accessible', true);
      expect(component).toHaveProp('accessibilityRole', 'button');
      expect(component).toHaveProp('accessibilityState', {
        disabled: true,
        selected: false,
        busy: true,
      });
    });

    it('Should receive children to be shown in Button component as a title', () => {
      const words = mockWords();

      render(<Button title={words} />);

      expect(screen.getByTestId('text')).toHaveProp('children', words);
    });

    it("Should render Button component with primary variant and change your color when it's pressed", () => {
      render(<Button variant='primary' bordered />);

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
      render(<Button variant='secondary' bordered />);

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
      render(<Button variant='tertiary' bordered />);

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
      render(<Button variant='success' bordered />);

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
      render(<Button variant='ghost' bordered />);

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
      render(<Button variant='danger' bordered />);

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
      render(<Button variant='warning' bordered />);

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
      render(<Button variant='neutral' bordered />);

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
      render(<Button variant='primary' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.blue[300],
        borderColor: colors.blue[50],
      });
    });

    it('Should render Button component with secondary variant disabled', () => {
      render(<Button variant='secondary' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.white[85],
        borderColor: colors.black[50],
      });
    });

    it('Should render Button component with tertiary variant disabled', () => {
      render(<Button variant='tertiary' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.stone[700],
        borderColor: colors.stone[50],
      });
    });

    it('Should render Button component with success variant disabled', () => {
      render(<Button variant='success' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.green[300],
        borderColor: colors.green[50],
      });
    });

    it('Should render Button component with ghost variant disabled', () => {
      render(<Button variant='ghost' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: 'transparent',
        borderColor: colors.black[50],
      });
    });

    it('Should render Button component with danger variant disabled', () => {
      render(<Button variant='danger' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.red[300],
        borderColor: colors.red[50],
      });
    });

    it('Should render Button component with warning variant disabled', () => {
      render(<Button variant='warning' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.yellow[300],
        borderColor: colors.yellow[50],
      });
    });

    it('Should render Button component with neutral variant disabled', () => {
      render(<Button variant='neutral' disabled bordered />);

      const pressable = screen.getByTestId('pressable');

      expect(pressable).toBeDisabled();
      expect(pressable).toHaveStyle({
        backgroundColor: colors.neutral[300],
        borderColor: colors.neutral[50],
      });
    });

    it('Should render Button component with hugWidth as true', () => {
      render(<Button hugWidth />);

      expect(screen.getByTestId('wrapper')).toHaveStyle({
        width: '100%',
      });
      expect(screen.getByTestId('pressable')).toHaveStyle({
        paddingHorizontal: spacings[2],
      });
    });

    it('Should render Button component with hugWidth as false', () => {
      render(<Button hugWidth={false} />);

      expect(screen.getByTestId('wrapper')).toHaveStyle({
        width: 'auto',
      });
      expect(screen.getByTestId('pressable')).toHaveStyle({
        paddingHorizontal: spacings[5],
      });
    });

    it('Should render Button component with border when bordered is true', () => {
      render(<Button bordered />);

      expect(screen.getByTestId('pressable')).toHaveStyle({
        borderWidth: borderWidths.px,
        borderColor: colors.white[100],
      });
    });

    it('Should render Button component without border when bordered is false', () => {
      render(<Button bordered={false} />);

      expect(screen.getByTestId('pressable')).toHaveStyle({
        borderWidth: undefined,
        borderColor: undefined,
      });
    });

    it('Should call onPressIn when the Button component is pressed', () => {
      const onPressIn = jest.fn(() => {});

      render(<Button onPressIn={onPressIn} />);

      fireEvent(screen.getByTestId('pressable'), 'pressIn');

      expect(onPressIn).toHaveBeenCalledTimes(1);
    });

    it('Should call onPressOut when the Button component is pressed', () => {
      const onPressOut = jest.fn(() => {});

      render(<Button onPressOut={onPressOut} />);

      fireEvent(screen.getByTestId('pressable'), 'pressOut');

      expect(onPressOut).toHaveBeenCalledTimes(1);
    });

    it('Should remain with opacity in 100% when Button component is enabled and not pressed', () => {
      render(<Button />);

      expect(screen.getByTestId('content')).toHaveStyle({
        opacity: opacities[100],
      });
    });

    it('Should remain with opacity in 95% when Button component is pressed', () => {
      render(<Button />);

      const pressable = screen.getByTestId('pressable');
      const content = screen.getByTestId('content');

      const defaultContentStyle: StyleProp<ViewStyle> = {
        opacity: opacities[100],
      };

      expect(content).toHaveStyle(defaultContentStyle);

      fireEvent(pressable, 'pressIn');

      expect(content).toHaveStyle({
        opacity: opacities[95],
      });

      fireEvent(pressable, 'pressOut');

      expect(content).toHaveStyle(defaultContentStyle);
    });

    it('Should remain with opacity in 90% when Button component is disabled', () => {
      render(<Button disabled />);

      expect(screen.getByTestId('content')).toHaveStyle({
        opacity: opacities[90],
      });
    });

    it('Should render Button component with customized Text component', () => {
      const words = mockWords();

      render(<Button title={words} textProps={{ testID: 'custom-text' }} />);

      const customText = screen.getByTestId('custom-text');

      expect(customText).toHaveProp('children', words);
      expect(customText).toBeOnTheScreen();
      expect(screen.getByTestId('wrapper')).toBeOnTheScreen();
    });

    it('Should render Button component with customized Spinner component', () => {
      animatedSpy('loop');

      render(<Button loading spinnerProps={{ testID: 'custom-spinner' }} />);

      expect(screen.getByTestId('custom-spinner')).toBeOnTheScreen();
      expect(screen.getByTestId('wrapper')).toBeOnTheScreen();
    });

    it('Should render Button component with the Text as priority component', () => {
      const words = mockWords();

      render(<Button title={words} />);

      expect(screen.getByTestId('text')).toBeOnTheScreen();
      expect(screen.queryByTestId('spinner')).not.toBeOnTheScreen();
      expect(screen.getByTestId('wrapper')).toBeOnTheScreen();
    });

    it('Should render Button component with the Spinner as priority component when loading is true', () => {
      animatedSpy('loop');

      const words = mockWords();

      render(<Button loading title={words} />);

      expect(screen.queryByTestId('text')).not.toBeOnTheScreen();
      expect(screen.getByTestId('spinner')).toBeOnTheScreen();
      expect(screen.getByTestId('wrapper')).toBeOnTheScreen();
    });

    it('Should take a snapshot of the Button component', () => {
      const component = render(<Button />);
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

      render(<Button loading />);

      const spinner = screen.getByTestId('spinner');

      expect(screen.getByTestId('pressable')).toBeDisabled();
      expect(spinner).toHaveStyle({
        width: spacings[6],
        height: spacings[6],
        borderTopColor: colors.white[25],
        borderRightColor: colors.white[25],
        borderBottomColor: colors.white[100],
        borderLeftColor: colors.white[100],
      });
      expect(spinner).toBeOnTheScreen();
      expect(screen.queryByTestId('text')).not.toBeOnTheScreen();
    });

    it("Should take a snapshot of the Button component when it's loading", () => {
      mockPlatform('ios');

      const component = render(<Button loading />);
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

      render(<Button loading />);

      const spinner = screen.getByTestId('spinner');

      expect(screen.getByTestId('pressable')).toBeDisabled();
      expect(spinner).toHaveProp('size', spacings[6]);
      expect(spinner).toHaveProp('color', colors.white[100]);
      expect(spinner).toBeOnTheScreen();
      expect(screen.queryByTestId('text')).not.toBeOnTheScreen();
    });

    it("Should take a snapshot of the Button component when it's loading", () => {
      mockPlatform('android');

      const component = render(<Button loading />);
      expect(component).toMatchSnapshot();
    });
  });
});
