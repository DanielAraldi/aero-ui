import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { spacings, SpacingKeysType } from '@zephyr/tokens';

import { styles } from './styles';
import { globalStyles } from '../../styles';

function getKeyByValue(value: number): SpacingKeysType | null {
  for (let property in spacings) {
    if (spacings.hasOwnProperty(property)) {
      if (spacings[property] === value) return property as SpacingKeysType;
    }
  }

  return null;
}

function getSpacingValue(): number[] {
  return Object.values(spacings).sort(
    (previousValue, value) => previousValue - value
  );
}

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {getSpacingValue().map(spacing => (
        <View key={spacing} style={styles.content}>
          <View style={[styles.progress, { width: spacing }]} />

          <View style={styles.textContainer}>
            <Text style={globalStyles.text}>{spacing}px</Text>

            <Text style={globalStyles.text}>{getKeyByValue(spacing)}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Spacings: StoryObj = {};
