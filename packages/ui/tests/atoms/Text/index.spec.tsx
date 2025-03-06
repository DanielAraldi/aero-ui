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

  it('Should render Text component with sm font configuration for text', () => {
    render(<Text variant='sm'>sm</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.sm,
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with base font configuration for text', () => {
    render(<Text variant='base'>base</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes.base,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.base,
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with lg font configuration for text', () => {
    render(<Text variant='lg'>lg</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.lg,
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with xl font configuration for text', () => {
    render(<Text variant='xl'>xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.xl,
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 2xl font configuration for text', () => {
    render(<Text variant='2xl'>2xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['2xl'],
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 3xl font configuration for text', () => {
    render(<Text variant='3xl'>3xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['3xl'],
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 4xl font configuration for text', () => {
    render(<Text variant='4xl'>4xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['4xl'],
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 5xl font configuration for text', () => {
    render(<Text variant='5xl'>5xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['5xl'],
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 6xl font configuration for text', () => {
    render(<Text variant='6xl'>6xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['6xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['6xl'],
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 7xl font configuration for text', () => {
    render(<Text variant='7xl'>7xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['7xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['7xl'],
      letterSpacing: letterSpacings.normal,
    });
  });

  it('Should render Text component with 8xl font configuration for text', () => {
    render(<Text variant='8xl'>8xl</Text>);
    expect(screen.getByTestId('text')).toHaveStyle({
      fontSize: fontSizes['8xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights['8xl'],
      letterSpacing: letterSpacings.normal,
    });
  });
});
