import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { lineHeights } from '@aero-ui/tokens';

import { globalStyles } from '../../../styles';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens/Fonts',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.spaceBetweenContent}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(lineHeights).map(([key, lineHeight]) => (
        <View key={key} style={styles.content}>
          <Text style={[globalStyles.text, { lineHeight }]}>{key}</Text>

          <Text style={[globalStyles.text, { lineHeight }]}>
            {lineHeight}px
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const LineHeights: StoryObj = {};
