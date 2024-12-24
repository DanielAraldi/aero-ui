import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { opacities } from '@zephyr/tokens';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {Object.entries(opacities).map(([key, value]) => (
        <View key={key} style={[styles.content, { opacity: value }]}>
          <Text style={styles.text}>
            opacity/{key} - {(value * 100).toFixed(2)}%
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const Opacities: StoryObj = {};