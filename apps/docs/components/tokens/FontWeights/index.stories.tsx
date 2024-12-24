import { ScrollView, Text, View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';
import { fontWeights, fontFamilies } from '@zephyr/tokens';

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
      {Object.entries(fontWeights).map(([key, fontWeight]) => (
        <View key={key} style={styles.content}>
          <Text
            style={[
              globalStyles.text,
              { fontFamily: fontFamilies.clarity[key].default, fontWeight },
            ]}
          >
            {key}
          </Text>

          <Text
            style={[
              globalStyles.text,
              { fontFamily: fontFamilies.clarity[key].default, fontWeight },
            ]}
          >
            {fontWeight}
          </Text>
        </View>
      ))}
    </ScrollView>
  ),
};

export default meta;

export const FontWeights: StoryObj = {};
