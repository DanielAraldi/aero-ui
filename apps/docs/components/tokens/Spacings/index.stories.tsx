import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { spacings, SpacingKeysType, SpacingObjectType } from '@aero/tokens';

import { styles } from './styles';
import { globalStyles } from '../../styles';
import { getValuesSortedOfObject, getKeyObjectByValue } from '../../utils';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {getValuesSortedOfObject<number>(spacings).map(spacing => (
        <View key={spacing} style={styles.content}>
          <View style={[styles.progress, { width: spacing }]} />

          <View style={styles.textContainer}>
            <Text style={globalStyles.text}>{spacing}px</Text>

            <Text style={globalStyles.text}>
              {getKeyObjectByValue<SpacingObjectType, SpacingKeysType>(
                spacings,
                spacing
              )}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Spacings: StoryObj = {};
