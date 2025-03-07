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
  textComponentStub(variant: TextVariantType): ReactElement<TextProps>;
  textStyleStub(variant: TextVariantType): StyleProp<TextStyle>;
};

function getTextComponentStub(
  variant: TextVariantType
): ReactElement<TextProps> {
  return <Text variant={variant}>{variant}</Text>;
}

function getTextStyleStub(variant: TextVariantType): StyleProp<TextStyle> {
  return {
    fontSize: fontSizes[variant],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[variant],
    letterSpacing: letterSpacings.normal,
  };
}

function makeSut(): SutTypes {
  return {
    textComponentStub: getTextComponentStub,
    textStyleStub: getTextStyleStub,
  };
}

describe('<Text />', () => {
  it('Should render Text component with default properties', () => {
    const { textStyleStub } = makeSut();

    render(<Text />);
    const component = screen.getByTestId('text');
    expect(component).toHaveStyle(textStyleStub('base'));
    expect(component).toBeOnTheScreen();
  });

  it("Should render Text component with 'Aero UI' text", () => {
    render(<Text>Aero UI</Text>);
    expect(screen.getByText('Aero UI')).toBeOnTheScreen();
  });

  it('Should render Text component with xs font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('xs'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('xs'));
  });

  it('Should render Text component with sm font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('sm'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('sm'));
  });

  it('Should render Text component with base font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('base'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('base'));
  });

  it('Should render Text component with lg font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('lg'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('lg'));
  });

  it('Should render Text component with xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('xl'));
  });

  it('Should render Text component with 2xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('2xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('2xl'));
  });

  it('Should render Text component with 3xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('3xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('3xl'));
  });

  it('Should render Text component with 4xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('4xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('4xl'));
  });

  it('Should render Text component with 5xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('5xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('5xl'));
  });

  it('Should render Text component with 6xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('6xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('6xl'));
  });

  it('Should render Text component with 7xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('7xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('7xl'));
  });

  it('Should render Text component with 8xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('8xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('8xl'));
  });

  it('Should render Text component with 9xl font configuration for text', () => {
    const { textComponentStub, textStyleStub } = makeSut();

    render(textComponentStub('9xl'));
    expect(screen.getByTestId('text')).toHaveStyle(textStyleStub('9xl'));
  });

  it('Should take a snapshot of the Text component', () => {
    const component = render(<Text>Aero UI</Text>);
    expect(component).toMatchSnapshot();
  });
});
