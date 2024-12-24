import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { opacities } from '@zephyr/tokens';

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
          <Text style={globalStyles.text}>
            {key} - {(opacity * 100).toFixed(2)}%
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Opacities: StoryObj = {};
