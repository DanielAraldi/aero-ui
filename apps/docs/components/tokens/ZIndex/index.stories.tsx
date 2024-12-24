import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { zIndexes } from '@zephyr/tokens';
import { styles } from './styles';

const meta: Meta = {
  title: 'Tokens',
  component: () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {Object.entries(zIndexes).map(([key, value]) => (
        <View key={key} style={styles.content}>
          <Text style={styles.text}>
            z-index/{key} - {value}
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const ZIndex: StoryObj = {};
