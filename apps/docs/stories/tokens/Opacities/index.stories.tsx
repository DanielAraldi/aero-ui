import { ScrollView, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { Text } from '@aero-ui/ui';
import { opacities } from '@aero-ui/tokens';

import { styles } from './styles';
import { globalStyles } from '../../styles';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView
      style={globalStyles.container}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(opacities).map(([key, opacity]) => (
        <View key={key} style={[styles.content, { opacity }]}>
          <Text.Base style={globalStyles.text}>
            {key} - {(opacity * 100).toFixed(2)}%
          </Text.Base>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Opacities: StoryObj = {};
