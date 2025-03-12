import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

import { Skeleton, useSkeleton } from '../../../../';

interface SutTypes {
  childStub: jest.Mock<JSX.Element, [], any>;
}

const ChildStub = jest.fn(() => {
  const { activated, duration, useNativeDriver } = useSkeleton();

  return (
    <>
      <Text testID='activated'>{String(activated)}</Text>
      <Text testID='duration'>{String(duration)}</Text>
      <Text testID='use-native-driver'>{String(useNativeDriver)}</Text>
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
    expect(screen.getByTestId('duration')).toHaveTextContent('1500');
    expect(screen.getByTestId('activated')).toHaveTextContent('true');
    expect(screen.getByTestId('use-native-driver')).toHaveTextContent('true');
  });
});
