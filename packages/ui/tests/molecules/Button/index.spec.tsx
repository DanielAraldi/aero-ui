import { Platform } from 'react-native';
import { borderWidths, colors, spacings } from '@aero-ui/tokens';
import { render, screen, fireEvent } from '@testing-library/react-native';

import { Button } from '../../../';
import { mockPlatform } from '../../mocks';

describe('<Button />', () => {
  describe('Both (iOS and Android)', () => {
    test('Should render Button component with default properties', () => {
      render(<Button useNativeDriver={false} />);

      const button = screen.getByTestId('button');
      const touchable = screen.getByTestId('touchable');
      const text = screen.getByTestId('text');
      const spinner = screen.queryByTestId('spinner');

      expect(button).toHaveStyle({
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

      expect(button).toBeOnTheScreen();
      expect(touchable).toBeOnTheScreen();
      expect(text).toBeOnTheScreen();
      expect(spinner).toBeNull();
    });

    test('Should change title of Button component when title is changed', () => {
      render(<Button title='Aero UI' useNativeDriver={false} />);

      const text = screen.getByTestId('text');

      expect(text).toHaveProp('children', 'Aero UI');
    });

    test("Should render Button component with primary variant and change your color when it's pressed", async () => {
      render(<Button variant='primary' bordered useNativeDriver={false} />);

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

    test("Should render Button component with secondary variant and change your color when it's pressed", async () => {
      render(<Button variant='secondary' bordered useNativeDriver={false} />);

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

    test("Should render Button component with tertiary variant and change your color when it's pressed", async () => {
      render(<Button variant='tertiary' bordered useNativeDriver={false} />);

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

    test("Should render Button component with success variant and change your color when it's pressed", async () => {
      render(<Button variant='success' bordered useNativeDriver={false} />);

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

    test("Should render Button component with ghost variant and change your color when it's pressed", async () => {
      render(<Button variant='ghost' bordered useNativeDriver={false} />);

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

    test("Should render Button component with danger variant and change your color when it's pressed", async () => {
      render(<Button variant='danger' bordered useNativeDriver={false} />);

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

    test("Should render Button component with warning variant and change your color when it's pressed", async () => {
      render(<Button variant='warning' bordered useNativeDriver={false} />);

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

    test("Should render Button component with neutral variant and change your color when it's pressed", async () => {
      render(<Button variant='neutral' bordered useNativeDriver={false} />);

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

    test('Should render Button component with primary variant disabled', async () => {
      render(
        <Button variant='primary' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.blue[300],
        borderColor: colors.blue[50],
      });
    });

    test('Should render Button component with secondary variant disabled', async () => {
      render(
        <Button variant='secondary' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.white[85],
        borderColor: colors.black[50],
      });
    });

    test('Should render Button component with tertiary variant disabled', async () => {
      render(
        <Button variant='tertiary' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.stone[700],
        borderColor: colors.stone[50],
      });
    });

    test('Should render Button component with success variant disabled', async () => {
      render(
        <Button variant='success' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.green[300],
        borderColor: colors.green[50],
      });
    });

    test('Should render Button component with ghost variant disabled', async () => {
      render(
        <Button variant='ghost' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: 'transparent',
        borderColor: colors.black[50],
      });
    });

    test('Should render Button component with danger variant disabled', async () => {
      render(
        <Button variant='danger' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.red[300],
        borderColor: colors.red[50],
      });
    });

    test('Should render Button component with warning variant disabled', async () => {
      render(
        <Button variant='warning' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.yellow[300],
        borderColor: colors.yellow[50],
      });
    });

    test('Should render Button component with neutral variant disabled', async () => {
      render(
        <Button variant='neutral' disabled bordered useNativeDriver={false} />
      );

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toBeDisabled();
      expect(touchable).toHaveStyle({
        backgroundColor: colors.neutral[300],
        borderColor: colors.neutral[50],
      });
    });

    test('Should render Button component with hugWidth as true', async () => {
      render(<Button hugWidth useNativeDriver={false} />);

      const button = screen.getByTestId('button');
      const touchable = screen.getByTestId('touchable');

      expect(button).toHaveStyle({
        width: '100%',
      });
      expect(touchable).toHaveStyle({
        paddingHorizontal: spacings[2],
      });
    });

    test('Should render Button component with hugWidth as false', async () => {
      render(<Button hugWidth={false} useNativeDriver={false} />);

      const button = screen.getByTestId('button');
      const touchable = screen.getByTestId('touchable');

      expect(button).toHaveStyle({
        width: 'auto',
      });
      expect(touchable).toHaveStyle({
        paddingHorizontal: spacings[5],
      });
    });

    test('Should render Button component with border when bordered is true', async () => {
      render(<Button bordered useNativeDriver={false} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderWidth: borderWidths.px,
        borderColor: colors.white[100],
      });
    });

    test('Should render Button component without border when bordered is false', async () => {
      render(<Button bordered={false} useNativeDriver={false} />);

      const touchable = screen.getByTestId('touchable');

      expect(touchable).toHaveStyle({
        borderWidth: undefined,
        borderColor: undefined,
      });
    });

    test('Should call onPressIn when the Button component is pressed', async () => {
      const onPressIn = jest.fn(() => {});

      render(<Button onPressIn={onPressIn} useNativeDriver={false} />);

      const touchable = screen.getByTestId('touchable');

      fireEvent(touchable, 'pressIn');

      expect(onPressIn).toHaveBeenCalledTimes(1);
    });

    test('Should call onPressOut when the Button component is pressed', async () => {
      const onPressOut = jest.fn(() => {});

      render(<Button onPressOut={onPressOut} useNativeDriver={false} />);

      const touchable = screen.getByTestId('touchable');

      fireEvent(touchable, 'pressOut');

      expect(onPressOut).toHaveBeenCalledTimes(1);
    });

    it('Should take a snapshot of the Button component', () => {
      const component = render(<Button useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('iOS', () => {
    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it("Should render Button component with Spinner when it's loading", () => {
      mockPlatform('ios');

      render(<Button loading useNativeDriver={false} />);

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

      const component = render(<Button loading useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Android', () => {
    beforeEach(() => {
      mockPlatform(Platform.OS);
    });

    it("Should render Button component with Spinner when it's loading", () => {
      mockPlatform('android');

      render(<Button loading useNativeDriver={false} />);

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

      const component = render(<Button loading useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });
});
