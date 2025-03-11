import { Platform } from 'react-native';
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
      const touchable = screen.getByTestId('touchable');
      const text = screen.getByTestId('text');
      const spinner = screen.queryByTestId('spinner');

      expect(wrapper).toHaveStyle({
        width: '100%',
        transform: [{ scale: 1 }],
      });

      expect(touchable).toHaveStyle({
        backgroundColor: colors.blue[500],
      });
      expect(touchable).not.toHaveStyle({
        backgroundColor: colors.blue[400],
      });
      expect(touchable).not.toHaveStyle({
        backgroundColor: colors.blue[300],
      });
      expect(touchable).not.toBeDisabled();

      expect(text).toHaveProp('children', 'Title');
      expect(text).toHaveStyle({
        color: colors.white[100],
      });

      expect(wrapper).toBeOnTheScreen();
      expect(touchable).toBeOnTheScreen();
      expect(text).toBeOnTheScreen();
      expect(spinner).toBeNull();
    });

    it('Should change title of Button component when title is changed', () => {
      const words = faker.word.words({ count: { min: 1, max: 5 } });

      render(<Button title={words} {...defaultProps} />);

      const text = screen.getByTestId('text');

      expect(text).toHaveProp('children', words);
    });

    it("Should render Button component with primary variant and change your color when it's pressed", () => {
      render(<Button variant='primary' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.blue[100],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });
    });

    it("Should render Button component with secondary variant and change your color when it's pressed", () => {
      render(<Button variant='secondary' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.black[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.black[85],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.black[100],
      });
    });

    it("Should render Button component with tertiary variant and change your color when it's pressed", () => {
      render(<Button variant='tertiary' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.stone[100],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });
    });

    it("Should render Button component with success variant and change your color when it's pressed", () => {
      render(<Button variant='success' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.green[100],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });
    });

    it("Should render Button component with ghost variant and change your color when it's pressed", () => {
      render(<Button variant='ghost' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.black[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.black[85],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.black[100],
      });
    });

    it("Should render Button component with danger variant and change your color when it's pressed", () => {
      render(<Button variant='danger' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.red[100],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });
    });

    it("Should render Button component with warning variant and change your color when it's pressed", () => {
      render(<Button variant='warning' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.yellow[100],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });
    });

    it("Should render Button component with neutral variant and change your color when it's pressed", () => {
      render(<Button variant='neutral' bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });

      fireEvent(touchable, 'pressIn');

      expect(touchable).toHaveStyle({
        borderColor: colors.neutral[100],
      });

      fireEvent(touchable, 'pressOut');

      expect(touchable).toHaveStyle({
        borderColor: colors.white[100],
      });
    });

    it('Should render Button component with primary variant disabled', () => {
      render(<Button variant='primary' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.blue[300],
        borderColor: colors.blue[50],
      });
    });

    it('Should render Button component with secondary variant disabled', () => {
      render(
        <Button variant='secondary' disabled bordered {...defaultProps} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.white[85],
        borderColor: colors.black[50],
      });
    });

    it('Should render Button component with tertiary variant disabled', () => {
      render(<Button variant='tertiary' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.stone[700],
        borderColor: colors.stone[50],
      });
    });

    it('Should render Button component with success variant disabled', () => {
      render(<Button variant='success' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.green[300],
        borderColor: colors.green[50],
      });
    });

    it('Should render Button component with ghost variant disabled', () => {
      render(<Button variant='ghost' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: 'transparent',
        borderColor: colors.black[50],
      });
    });

    it('Should render Button component with danger variant disabled', () => {
      render(<Button variant='danger' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.red[300],
        borderColor: colors.red[50],
      });
    });

    it('Should render Button component with warning variant disabled', () => {
      render(<Button variant='warning' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.yellow[300],
        borderColor: colors.yellow[50],
      });
    });

    it('Should render Button component with neutral variant disabled', () => {
      render(<Button variant='neutral' disabled bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.neutral[300],
        borderColor: colors.neutral[50],
      });
    });

    it('Should render Button component with hugWidth as true', () => {
      render(<Button hugWidth {...defaultProps} />);

      const wrapper = screen.getByTestId('wrapper');
      const touchable = screen.getByTestId('touchable');

      expect(wrapper).toHaveStyle({
        width: '100%',
      });

      expect(touchable).toHaveStyle({
        paddingHorizontal: spacings[2],
      });
    });

    it('Should render Button component with hugWidth as false', () => {
      render(<Button hugWidth={false} {...defaultProps} />);

      const wrapper = screen.getByTestId('wrapper');
      const touchable = screen.getByTestId('touchable');

      expect(wrapper).toHaveStyle({
        width: 'auto',
      });

      expect(touchable).toHaveStyle({
        paddingHorizontal: spacings[5],
      });
    });

    it('Should render Button component with border when bordered is true', () => {
      render(<Button bordered {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderWidth: borderWidths.px,
        borderColor: colors.white[100],
      });
    });

    it('Should render Button component without border when bordered is false', () => {
      render(<Button bordered={false} {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderWidth: undefined,
        borderColor: undefined,
      });
    });

    it('Should call onPressIn when the Button component is pressed', () => {
      const onPressIn = jest.fn(() => {});

      render(<Button onPressIn={onPressIn} {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      fireEvent(touchable, 'pressIn');

      expect(onPressIn).toHaveBeenCalledTimes(1);
    });

    it('Should call onPressOut when the Button component is pressed', () => {
      const onPressOut = jest.fn(() => {});

      render(<Button onPressOut={onPressOut} {...defaultProps} />);

      const touchable = screen.getByTestId('touchable');

      fireEvent(touchable, 'pressOut');

      expect(onPressOut).toHaveBeenCalledTimes(1);
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

      const touchable = screen.getByTestId('touchable');
      const spinner = screen.getByTestId('spinner');
      const text = screen.queryByTestId('text');

      expect(touchable).toBeDisabled();
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

      const touchable = screen.getByTestId('touchable');
      const spinner = screen.getByTestId('spinner');
      const text = screen.queryByTestId('text');

      expect(touchable).toBeDisabled();
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
