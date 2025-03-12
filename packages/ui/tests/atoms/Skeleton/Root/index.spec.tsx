import { render, screen } from '@testing-library/react-native';
import { Skeleton } from '../../../../';

describe('<Skeleton.Root />', () => {
  it('Should render Skeleton.Root component', () => {
    render(<Skeleton.Root />);
    expect(screen.getByTestId('root')).toBeOnTheScreen();
  });
});
