import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { fontSizes, lineHeights } from '@zephyr/tokens';

import { globalStyles } from '../../styles';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(fontSizes).map(([key, fontSize]) => (
        <View key={key} style={styles.content}>
          <Text
            style={[
              globalStyles.text,
              { lineHeight: lineHeights[key], fontSize },
            ]}
          >
            {key}
          </Text>

          <Text
            style={[
              globalStyles.text,
              { lineHeight: lineHeights[key], fontSize },
            ]}
          >
            {fontSize}px
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const FontSizes: StoryObj = {};
