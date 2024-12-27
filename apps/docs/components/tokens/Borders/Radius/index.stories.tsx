import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { borderRadius } from '@zephyr/tokens';

import { globalStyles } from '../../../styles';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens/Borders',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(borderRadius).map(([key, borderRadius]) => (
        <View key={key} style={styles.content}>
          <Text style={globalStyles.text}>{key}</Text>

          <View style={[styles.rectangle, { borderRadius }]}>
            <Text style={globalStyles.text}>{borderRadius}px</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const BorderRadius: StoryObj = {};
