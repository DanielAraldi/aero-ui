import { colors } from '@aero-ui/tokens';
import { render, screen } from '@testing-library/react-native';

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

    it('Should take a snapshot of the Button component', () => {
      const component = render(<Button useNativeDriver={false} />);
      expect(component).toMatchSnapshot();
    });
  });
});
