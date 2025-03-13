import { Easing, Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Skeleton, useSkeleton } from '../../../../';

interface SutTypes {
  childStub: jest.Mock<JSX.Element, [], any>;
}

const ChildStub = jest.fn(() => {
  const { activated, duration, useNativeDriver, easing } = useSkeleton();

  return (
    <>
      <Text testID='activated'>{String(activated)}</Text>
      <Text testID='duration'>{String(duration)}</Text>
      <Text testID='use-native-driver'>{String(useNativeDriver)}</Text>
      <Text testID='easing'>{String(easing)}</Text>
    </>
  );
});

function makeSut(): SutTypes {
  return {
    childStub: ChildStub,
  };
}

describe('<Skeleton.Root />', () => {
  it('Should render Skeleton.Root component', () => {
    render(<Skeleton.Root />);
    expect(screen.getByTestId('root')).toBeOnTheScreen();
  });

  it('Should pass props to the children correctly', () => {
    const { childStub: ChildStub } = makeSut();

    render(
      <Skeleton.Root>
        <ChildStub />
      </Skeleton.Root>
    );

    expect(ChildStub).toHaveBeenCalled();
    expect(screen.getByTestId('duration')).toHaveTextContent('2000');
    expect(screen.getByTestId('activated')).toHaveTextContent('true');
    expect(screen.getByTestId('use-native-driver')).toHaveTextContent('true');
    expect(screen.getByTestId('easing')).toHaveTextContent(
      String(Easing.bezier(0.4, 0, 0.6, 1))
    );
  });

  it('Should take a snapshot of the Skeleton.Root component', () => {
    const { childStub: ChildStub } = makeSut();

    const component = render(
      <Skeleton.Root>
        <ChildStub />
      </Skeleton.Root>
    );
    expect(component).toMatchSnapshot();
  });
});
