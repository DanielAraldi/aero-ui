import { ReactElement } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from '@aero-ui/tokens';

import { Text, TextProps, TextVariantType } from '../../../';

type SutTypes = {
  TextComponent: ReactElement<TextProps>;
  textStyle: StyleProp<TextStyle>;
};

function getTextComponentByVariant(
  variant: TextVariantType
): ReactElement<TextProps> {
  return <Text variant={variant}>{variant}</Text>;
}

function getTextStyleByVariant(variant: TextVariantType): StyleProp<TextStyle> {
  return {
    fontSize: fontSizes[variant],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[variant],
    letterSpacing: letterSpacings.normal,
  };
}

function makeSut(variant: TextVariantType): SutTypes {
  const TextComponent = getTextComponentByVariant(variant);
  const textStyle = getTextStyleByVariant(variant);

  return { TextComponent, textStyle };
}

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
    const { TextComponent, textStyle } = makeSut('xs');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with sm font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('sm');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with base font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('base');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with lg font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('lg');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 2xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('2xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 3xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('3xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 4xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('4xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 5xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('5xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 6xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('6xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 7xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('7xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 8xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('8xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should render Text component with 9xl font configuration for text', () => {
    const { TextComponent, textStyle } = makeSut('9xl');

    render(TextComponent);
    expect(screen.getByTestId('text')).toHaveStyle(textStyle);
  });

  it('Should take a snapshot of the Text component', () => {
    const component = render(<Text>Aero UI</Text>);
    expect(component).toMatchSnapshot();
  });
});
