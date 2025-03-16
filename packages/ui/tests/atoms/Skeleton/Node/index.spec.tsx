import { render, screen } from '@testing-library/react-native';

import { Skeleton } from '../../../../';
import { animatedSpy } from '../../../spies';

describe('<Skeleton.Node />', () => {
  afterEach(() => {
    animatedSpy('loop');
  });

  it('Should render Skeleton.Node component', () => {
    render(<Skeleton.Node />);
    expect(screen.getByTestId('node')).toBeOnTheScreen();
  });
});
