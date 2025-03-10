import { colors } from '@aero-ui/tokens';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

import { Button } from '../../../';

describe('<Button />', () => {
  describe('Both', () => {
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

    it('Should take a snapshot of the Button component', () => {
      const component = render(<Button useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });
});
