import { ScrollView, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '@aero-ui/ui';
import { letterSpacings } from '@aero-ui/tokens';

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
      {Object.entries(letterSpacings).map(([key, letterSpacing]) => (
        <View key={key} style={styles.content}>
          <Text.Base style={[globalStyles.text, { letterSpacing }]}>
            {key}
          </Text.Base>

          <Text.Base style={[globalStyles.text, { letterSpacing }]}>
            {letterSpacing}px
          </Text.Base>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const LetterSpacings: StoryObj = {};
