import { Animated } from 'react-native';

export function animatedSpy(
  method: jest.FunctionPropertyNames<Required<typeof Animated>>
): void {
  jest.spyOn(Animated, method).mockReturnValue({
    start: jest.fn(),
    reset: jest.fn(),
    stop: jest.fn(),
  });
}
