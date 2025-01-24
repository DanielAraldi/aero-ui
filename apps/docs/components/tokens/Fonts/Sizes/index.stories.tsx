import { ScrollView, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '@aero-ui/ui';
import { fontSizes, lineHeights } from '@aero-ui/tokens';

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
      {Object.entries(fontSizes).map(([key, fontSize]) => (
        <View key={key} style={styles.content}>
          <Text.Base
            style={[
              globalStyles.text,
              { lineHeight: lineHeights[key], fontSize },
            ]}
          >
            {key}
          </Text.Base>

          <Text.Base
            style={[
              globalStyles.text,
              { lineHeight: lineHeights[key], fontSize },
            ]}
          >
            {fontSize}px
          </Text.Base>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Sizes: StoryObj = {};
