import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Archivo_300Light,
  Archivo_300Light_Italic,
  Archivo_400Regular,
  Archivo_400Regular_Italic,
  Archivo_500Medium,
  Archivo_500Medium_Italic,
  Archivo_600SemiBold,
  Archivo_600SemiBold_Italic,
  Archivo_700Bold,
  Archivo_700Bold_Italic,
} from '@expo-google-fonts/archivo';
import {
  Mulish_300Light,
  Mulish_300Light_Italic,
  Mulish_400Regular,
  Mulish_400Regular_Italic,
  Mulish_500Medium,
  Mulish_500Medium_Italic,
  Mulish_600SemiBold,
  Mulish_600SemiBold_Italic,
  Mulish_700Bold,
  Mulish_700Bold_Italic,
} from '@expo-google-fonts/mulish';
import {
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto';

export function FontLoader({ children }: PropsWithChildren) {
  const [isFontsLoaded] = useFonts({
    Archivo_300Light,
    Archivo_300Light_Italic,
    Archivo_400Regular,
    Archivo_400Regular_Italic,
    Archivo_500Medium,
    Archivo_500Medium_Italic,
    Archivo_600SemiBold,
    Archivo_600SemiBold_Italic,
    Archivo_700Bold,
    Archivo_700Bold_Italic,
    Mulish_300Light,
    Mulish_300Light_Italic,
    Mulish_400Regular,
    Mulish_400Regular_Italic,
    Mulish_500Medium,
    Mulish_500Medium_Italic,
    Mulish_600SemiBold,
    Mulish_600SemiBold_Italic,
    Mulish_700Bold,
    Mulish_700Bold_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
  });

  if (!isFontsLoaded) return null;

  return <View style={{ flex: 1 }}>{children}</View>;
}
