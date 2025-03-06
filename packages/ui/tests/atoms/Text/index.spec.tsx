import { render, screen } from '@testing-library/react-native';
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '@aero-ui/tokens';

import { Text } from '../../../';

describe('<Text />', () => {
  it('Should render Text component', () => {
    render(<Text />);
    expect(screen.getByTestId('text')).toBeOnTheScreen();
  });

  it("Should render Text component with 'Aero UI' text", () => {
    render(<Text>Aero UI</Text>);
    expect(screen.getByText('Aero UI')).toBeOnTheScreen();
  });

  it('Should render Text component with xs font configuration for text', () => {
    render(<Text variant='xs'>xs</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.xs,
      letterSpacing: letterSpacings.normal,
    });
  });
});
