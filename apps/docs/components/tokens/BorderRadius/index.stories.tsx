import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { borderRadius } from '@zephyr/tokens';

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
      {Object.entries(borderRadius).map(([key, value]) => (
        <View key={key} style={styles.content}>
          <Text style={globalStyles.text}>{key}</Text>

          <View
            style={[
              styles.rectangle,
              {
                borderRadius: value,
              },
            ]}
          >
            <Text style={globalStyles.text}>{value}px</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const BorderRadius: StoryObj = {};
